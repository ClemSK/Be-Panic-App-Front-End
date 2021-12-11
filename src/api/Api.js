// import axios from 'axios' // remove axios when hosting and replace with request
import { getToken } from './Auth.js'
import request from './Request.js'

// const baseUrl = 'https://panic-buying-back-end.herokuapp.com'
// const baseUrl = 'http://localhost:8001/'

export const getAllProducts = async () => {
  const options = { method: 'GET', url: `/api/product` }

  const { data } = await request(options)
  console.log(data)
  return data
}

export const getSingleProduct = async (id) => {
  //   const data = await axios.get(`/api/product/${id}`)
  const options = {
    method: 'GET',
    url: `/api/product/${id}`,
  }

  const { data } = await request(options)
  return data
}

export const searchProducts = async (query) => {
  const options = {
    method: 'GET',
    url: `/api/search`,
    params: {
      q: query,
    },
  }
  const { data } = await request(options)

  return data
}

export const createProducts = async (newProduct) => {
  const requestConfig = { headers: { Authorization: `Bearer ${getToken()}` } }

  const options = {
    method: 'POST',
    url: `/api/product/`,
    body: newProduct,
    headers,
  }

  const { data } = await request(options)
  return data

  //   return axios.post(`/api/product`, newProduct, requestConfig)
}

export const editProduct = async (id, formData) => {
  // add in admin access here and token, will need to update with secureRoute + admin check
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
  const options = {
    method: 'PUT',
    url: `/api/product/${id}`,
    body: formData,
    headers,
  }

  const { data } = await request(options)
  return data

  //   return axios.put(`/api/product/${id}`, formData, requestConfig)
}

export const deleteProduct = async (id) => {
  // add in admin access here and token, will need to update with secureRoute + admin check
  const headers = {
    Authorization: `Bearer ${getToken()}`,
  }

  const options = {
    method: 'DELETE',
    url: `/api/product/${id}`,
    headers,
  }

  const { data } = await request(options)
  return data

  //   return axios.delete(`/api/product/${id}`, requestConfig) // add requestConfig here
}

export const registerUser = async (formData) => {
  const options = { method: 'POST', url: `/api/register`, body: formData }
  const { data } = await request(options)
  return data
}

export const loginUser = async (formData) => {
  const options = { method: 'POST', url: `/api/login`, body: formData }

  const { data } = await request(options)
  return data
}

// export const getMovie = async (id) => {
//   const options = { method: 'GET', url: `/api/movies/${id}` };

//   const { data } = await request(options);
//   return data;
// };
