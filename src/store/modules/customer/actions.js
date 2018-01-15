import axios from 'axios'

const doGetAllCustomer = ({commit}) => {
  axios.get('/api/customers')
    .then(response => {
      commit('getAllCustomer', response.data.content)
    })
    .catch(error => {
      console.log(error)
    })
}

const doGetOneCustomer = ({commit, customerId}) => {
  axios.get('/api/customers/' + customerId)
    .then(response => {
      commit('getOneCustomer', response.data)
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
const doUpdateCustomer = ({commit}, customerData) => {
  axios.put('/api/customers/' + customerData.id, {
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
      commit('updateCustomer', response.data)
    })
    .catch(error => {
      console.log(error)
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

const doGetTotalPage = ({commit}) => {
  axios.get('/api/customers')
    .then(response => {
      commit('getTotalPage', response.data.totalPages)
      console.log(JSON.stringify(response.data.totalPages))
    })
    .catch(error => {
      console.log('Error: ' + error)
    })
}

const doGetCurrentPage = ({commit}, pageNumber) => {
  axios.get('/api/customers?page=' + pageNumber)
    .then(response => {
      commit('getCurrentPage', response.data.number)
    })
    .catch(error => {
      console.log(error)
    })
}

const doMovePage = ({commit}, pageNumber) => {
  axios.get('/api/customers?page=' + pageNumber)
    .then(response => {
      commit('getAllCustomer', response.data.content)
    })
    .catch(error => {
      console.log(error)
    })
}

const doGetFirstPage = ({commit}, pageNumber) => {
  axios.get('/api/customers?page=' + pageNumber)
    .then(response => {
      commit('getFirstPage', response.data.first)
    })
    .catch(error => {
      console.log(error)
    })
}

const doGetLastPage = ({commit}, pageNumber) => {
  axios.get('/api/customers?page=' + pageNumber)
    .then(response => {
      commit('getLastPage', response.data.last)
    })
    .catch(error => {
      console.log(error)
    })
}

export default {
  doGetAllCustomer,
  doGetOneCustomer,
  doPostCustomer,
  doUpdateCustomer,
  doDeleteCustomer,
  doGetTotalPage,
  doGetCurrentPage,
  doMovePage,
  doGetFirstPage,
  doGetLastPage
}
