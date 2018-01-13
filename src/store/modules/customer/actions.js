import axios from 'axios'

const doGetAllCustomer = ({commit}) => {
  axios.get('/api/customers')
    .then(response => {
      commit('getAllCustomer', response.data)
    })
    .catch(error => {
      console.log(error)
    })
}

const doPostCustomer = ({commit}, customerData) => {
  axios.post(
    '/api/customers', {
    name: customerData.name,
    address: {
      country: customerData.country,
      province: customerData.province,
      city: customerData.city,
      street: customerData.street
    }
  }, {
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(response => {
      commit('postCustomer', response.data)
    })
    .catch(error => {
      console.log('Error: ' + error)
    })
}

const doDeleteCustomer = ({commit}, customerId) => {
  axios.delete('/api/customers/' + customerId, {

  })
    .then(response => {
      commit('deleteCustomer', response.data)
    })
    .catch(error => {
      console.log(error)
    })
}

export default {
  doGetAllCustomer,
  doPostCustomer,
  doDeleteCustomer
}
