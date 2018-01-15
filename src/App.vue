<template>
  <div id="app">
    <Navbar></Navbar>
    <!--<Form></Form>-->
    <!-- <Links></Links> -->
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import Links from '@/components/Links'
import Navbar from '@/components/Navbar'
import Form from '@/components/customer/Form'
import CustomerEditModal from '@/components/customer/CustomerEditModal'

export default {
  name: 'app',
  components: {
    Links,
    Navbar,
    Form,
    CustomerEditModal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
