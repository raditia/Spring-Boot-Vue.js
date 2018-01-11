import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store ({
    state: {
        customer: []
    },
mutations: {
    assignCustomer: (state, response) => {
        state.customer = response
    }
},
getters: {
    customer: (state) => {
        return state.customer
    }
},
actions: {
    getAllCustomers: ({commit}) => {
        axios.get('/api/customers')
        .then(response => {
            commit('assignCustomer', response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

}

})

export default store