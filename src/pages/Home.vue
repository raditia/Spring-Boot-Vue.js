<template>
  <div class="container">
      <div class="field">
          <div class="control">
              <input v-model="name" class="input" type="text" placeholder="Name">
              <input v-model="country" class="input" type="text" placeholder="Country">
              <input v-model="province" class="input" type="text" placeholder="Province">
              <input v-model="city" class="input" type="text" placeholder="City">
              <input v-model="street" class="input" type="text" placeholder="Street">
            </div>
        </div>
    <button class="button is-primary is-outlined" @click="doPostCustomer">
        Tambah
        </button>
    <br>
    <br>
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
          <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="customer in customers" v-bind:key="customer.id">
              <td>{{customer.id}}</td>
              <td>{{customer.name}}</td>
              <td><button class="button is-link" @click="updateCustomer(customer.id)">Edit</button></td>
              <td><button class="button is-link" @click="deleteCustomer(customer.id)">Delete</button></td>
          </tr>
      </tbody>
  </table>
<!-- <button @click="getCustomer">Call Customer</button> -->
</div>
</template>


<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
    data () {
        return {
            customers: []
        }
    },
    computed: {
        ...mapGetters([
            'customer'
        ])
    },
    mounted () {
        this.getCustomer()
    },
    methods: {
        getCustomer: function () {
            //call api
            axios.get('/api/customers')
            .then(response => {
                console.log('response:', response)
                this.customers = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
        doPostCustomer: function () {
            axios.post('/api/customers',{
                name: this.name,
                address: {
                    country: this.country,
                    province: this.province,
                    city: this.city,
                    street: this.street
                }
                
            })
            .then(response => {
                console.log('response:', response)
                // biar datanya langsung muncul gausah refresh
                this.getCustomer()
            })
            .catch(error => {
                console.log(error)
            })
        },
        deleteCustomer: function (id) {
            axios.delete('/api/customers/'+id)
            .then(response => {
                console.log("success")
                this.getCustomer()
            })
            .catch(error => {
                console.log(error)
            })
        },
        updateCustomer: function (id) {
            axios.put('/api/customers/+id', {
                name: this.name,
                address: {
                    country: this.country,
                    province: this.province,
                    city: this.city,
                    street: this.street
                }
            })
            .then(response => {
                console.log("success")
                this.getCustomer()
            })
        }
    }
}
</script>

<style scoped>
    .control {
        margin: 5px;
}

</style>
