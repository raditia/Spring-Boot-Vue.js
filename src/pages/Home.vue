<template>
  <div class="container">
    <Form></Form>
    <CustomerTable></CustomerTable>
  </div>
</template>

<script>
  import Form from '@/components/customer/Form'
  import CustomerTable from '@/components/customer/CustomerTable'
  import CustomerEditModal from '@/components/customer/CustomerEditModal'

  export default {
    name: 'home',
    components: {
      Form,
      CustomerTable,
      CustomerEditModal
    }
  }
</script>

<style scoped>

</style>
