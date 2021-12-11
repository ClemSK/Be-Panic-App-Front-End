import axios from 'axios'
import { getToken } from './Auth'

export const getAllUser = () => {
  return axios.get('/api/superAdmin', {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}

export const getSingleUser = (id) => {
  return axios.get(`/api/superAdmin/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}

export const deleteSingleUser = (id) => {
  return axios.delete(`/api/superAdmin/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}
