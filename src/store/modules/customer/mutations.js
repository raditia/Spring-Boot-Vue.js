const getAllCustomer = (state, response) => {
  state.customerList = response
}

const postCustomer = (state, response) => {
  state.customerList.push(response)
}

const deleteCustomer = (state, response) => {
  var customerList = state.customerList
  customerList.splice(customerList.indexOf(response), 1)
}

export default {
  getAllCustomer,
  postCustomer,
  deleteCustomer
}
