<template>
  <div>
    <div class="modal fade" id="modal-form-edit-customer" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Customer</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-customer">
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
              <br>
            </div>
          </div>
          <div class="modal-footer">
            <div class="form-group">
              <button @click="updateCustomer" type="submit" class="btn btn-primary" data-dismiss="modal">UPDATE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'modal-form-edit-customer',
    data () {
      return {
      }
    },
    components: {
    },
    computed: {
      ...mapGetters({
        customer: 'customer/customer'
      })
    },
    methods: {
      updateCustomer: function () {
        this.$store.dispatch('customer/doUpdateCustomer', this.customer)
      }
    }
  }
</script>

<style>

</style>
