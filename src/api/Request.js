import axios from 'axios'

const request = (options) => {
  console.log(process.env.NODE_ENV)
  console.log('this is a test')
  const url =
    process.env.NODE_ENV === 'production'
      ? `https://panic-buying-back-end.herokuapp.com${options.url}`
      : options.url

  const requestOptions = {
    ...options,
    url,
  }

  return axios.request(requestOptions)
}

export default request
