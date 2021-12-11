import axios from 'axios'
import { getToken } from './Auth'

export const getAdminProduct = () => {
  return axios.get('/api/admin/product', {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}
