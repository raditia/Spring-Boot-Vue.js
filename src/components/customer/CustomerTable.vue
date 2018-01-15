<template>
  <div class="panel panel-default col-md-6">
    <div class="panel-heading">List Customer</div>
    <div class="panel-body">
      <table class="table table-stripped">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="customer in customerList" :key="customer.id">
          <th scope="row">{{ customer.id }}</th>
          <td>{{ customer.name }}</td>
          <td><button @click="getOneCustomer(customer.id)" type="button" class="btn btn-primary"
                      data-toggle="modal" data-target="#modal-form-edit-customer">Edit</button></td>
          <td><a href="#" @click="deleteCustomer(customer.id)">Delete</a></td>
        </tr>
        </tbody>
      </table>
      <CustomerEditModal/>
      <nav aria-label="Page navigation example" v-if="totalPage > 1">
        <ul class="pagination">
          <template v-if="firstPage === true">
            <li class="page-item disabled">
              <a class="page-link" @click="movePage(currentPage-1)">Previous</a>
            </li>
          </template>
          <template v-else>
            <li class="page-item">
              <a class="page-link" @click="movePage(currentPage-1)">Previous</a>
            </li>
          </template>
          <template v-for="page in totalPage">
            <template v-if="page === currentPage">
              <li class="page-item active">
                <a class="page-link" @click="movePage(page)">{{ page }}</a>
              </li>
            </template>
            <template v-else>
              <li class="page-item">
                <a class="page-link" @click="movePage(page)">{{ page }}</a>
              </li>
            </template>
          </template>
          <template v-if="lastPage === true">
            <li class="page-item disabled">
              <a class="page-link" @click="movePage(currentPage)">Next</a>
            </li>
          </template>
          <template v-else>
            <li class="page-item">
              <a class="page-link" @click="movePage(currentPage+1)">Next</a>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CustomerEditModal from '@/components/customer/CustomerEditModal'
  export default {
    name: 'customerTable',
    data () {
      return {
        customer: {}
      }
    },
    components: {
      CustomerEditModal
    },
    computed: {
      ...mapGetters({
        customerList: 'customer/customerList',
        totalPage: 'customer/totalPage',
        currentPage: 'customer/currentPage',
        firstPage: 'customer/firstPage',
        lastPage: 'customer/lastPage'
      })
    },
    created () {
      // default pageNumber adalah 2, karena di JSON itu kalau pageNumber 1, maka number = 0.
      // makannya dibuat default pageNumber itu 2 supaya ketahuan number currentPage adalah 1 (page awal)
      this.getCurrentPage(2)
      this.getFirstPage(1)
    },
    mounted () {
      this.getAllCustomer()
    },
    methods: {
      getAllCustomer: function () {
        this.$store.dispatch('customer/doGetAllCustomer')
        this.$store.dispatch('customer/doGetTotalPage')
      },
      getOneCustomer: function (customerId) {
        this.$store.dispatch('customer/doGetOneCustomer', customerId)
      },
      deleteCustomer: function (customerId) {
        this.$store.dispatch('customer/doDeleteCustomer', customerId)
      },
      movePage: function (pageNumber) {
        this.$store.dispatch('customer/doMovePage', pageNumber)
        this.$store.dispatch('customer/doGetCurrentPage', pageNumber + 1)
        this.$store.dispatch('customer/doGetFirstPage', pageNumber)
        this.$store.dispatch('customer/doGetLastPage', pageNumber)
      },
      getCurrentPage: function (pageNumber) {
        this.$store.dispatch('customer/doGetCurrentPage', pageNumber)
      },
      getFirstPage: function (pageNumber) {
        this.$store.dispatch('customer/doGetFirstPage', pageNumber)
      }
    }
  }
</script>

<style>

</style>
