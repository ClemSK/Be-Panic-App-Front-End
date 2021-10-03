import axios from 'axios' // remove axios when hosting and replace with request
// import request from './request';

// build out api endpoints + routes like in cheeseboard

export const getAllProducts = async () => {
  const options = { method: 'GET', url: `/api/product` }

  const { data } = await axios.request(options)
  return data
}

export const createProducts = async (newProduct) => {
  const options = {
    method: 'POST',
    url: '/api/product',
    body: newProduct,
  }
  const { data } = await axios.request(options)
  return data
}

export const getProduct = async (id) => {
  const options = { method: 'GET', url: `/api/product/${id}` }

  const { data } = await axios.request(options)
  return data
}
