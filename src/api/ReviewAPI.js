import axios from 'axios'

import { getToken } from './Auth.js'

export const createReview = (id, reviewData) => {
  return axios.post(`/api/product/${id}/review`, reviewData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}

export const deleteReview = (id, reviewId) => {
  return axios.delete(`/api/product/${id}/review/${reviewId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}
