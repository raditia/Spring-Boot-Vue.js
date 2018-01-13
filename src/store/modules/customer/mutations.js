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

const getTotalPage = (state, response) => {
  state.totalPage = response
}

const getCurrentPage = (state, response) => {
  state.currentPage = response
}

const getFirstPage = (state, response) => {
  state.firstPage = response
}

const getLastPage = (state, response) => {
  state.lastPage = response
}

export default {
  getAllCustomer,
  postCustomer,
  deleteCustomer,
  getTotalPage,
  getCurrentPage,
  getFirstPage,
  getLastPage
}
