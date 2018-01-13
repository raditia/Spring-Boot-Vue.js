<template>
  <div class="container">
    <div class="form-group">
      <input v-model="customer.name" class="form-control" type="text" placeholder="Name"/>
    </div>
    <div class="form-group">
      <input v-model="customer.country" class="form-control" type="text" placeholder="Country"/>
    </div>
    <div class="form-group">
      <input v-model="customer.province" class="form-control" type="text" placeholder="Province"/>
    </div>
    <div class="form-group">
      <input v-model="customer.city" class="form-control" type="text" placeholder="City"/>
    </div>
    <div class="form-group">
      <input v-model="customer.street" class="form-control" type="text" placeholder="Street"/>
    </div>
    <div class="form-group">
      <button @click="postCustomer" type="submit" class="btn btn-primary">Tambah</button>
    </div>
    <br/>
    <h4>List Customer</h4>
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
        <td></td>
        <td><a href="#" @click="deleteCustomer(customer.id)">Delete</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
        name: "home",
        data () {
          return {
            customer: {}
          }
        },
      mounted () {
          this.getAllCustomer()
      },
      computed: {
        ...mapGetters ({
          customerList: 'customer/customerList'
        })
      },
      methods: {
          getAllCustomer: function () {
            this.$store.dispatch('customer/doGetAllCustomer')

          },
        postCustomer: function () {
          this.$store.dispatch('customer/doPostCustomer', this.customer)
        },
        deleteCustomer: function (customerId) {
          this.$store.dispatch('customer/doDeleteCustomer', customerId)
        }
      }
    }
</script>

<style scoped>

</style>
