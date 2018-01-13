import Vue from 'vue'
import Vuex from 'vuex'
import customerModule from './modules/customer/index'

Vue.use(Vuex)

const store = new Vuex.Store ({
  modules: {
    customer: customerModule
  }
})
export default store
