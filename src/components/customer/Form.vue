<template>
  <div class="form-customer">
    <div class="panel panel-default col-md-6">
      <div class="panel-heading">Form</div>
      <div class="panel-body">
        <div class="form-group">
          <label>Name</label>
          <input v-model="customer.name" class="form-control" type="text" placeholder="Name"/>
        </div>
        <div class="form-group">
          <label>Country</label>
          <input v-model="customer.country" class="form-control" type="text" placeholder="Country"/>
        </div>
        <div class="form-group">
          <label>Province</label>
          <input v-model="customer.province" class="form-control" type="text" placeholder="Province"/>
        </div>
        <div class="form-group">
          <label>City</label>
          <input v-model="customer.city" class="form-control" type="text" placeholder="City"/>
        </div>
        <div class="form-group">
          <label>Street</label>
          <input v-model="customer.street" class="form-control" type="text" placeholder="Street"/>
        </div>
        <div class="form-group">
          <button @click="postCustomer" type="submit" class="btn btn-primary">Tambah</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'form-customer',
    data () {
      return {
        customer: {
          name: ''
        }
      }
    },
    methods: {
      postCustomer: function () {
        this.$store.dispatch('customer/doPostCustomer', this.customer)
        this.customer = {
          name: ''
        }
      }
    }
  }
</script>

<style>

</style>
