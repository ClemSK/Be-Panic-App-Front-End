export const setToken = (token) => {
  window.localStorage.setItem('token', token)
}

export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const removeToken = () => {
  window.localStorage.removeItem('token')
}

// what does getPayload do?
export const getPayload = () => {
  const token = getToken()
  if (!token) {
    return false
  }

  const parts = token.split('.')

  if (parts.length < 3) {
    return false
  }

  const jwt = atob(parts[1])
  const jwtParsed = JSON.parse(jwt)

  // just to see what these are
  // console.log({
  //   token,
  //   parts,
  //   jwt,
  //   jwtParsed,
  // })

  return jwtParsed
}

export const isLoggedIn = () => {
  const token = getToken()
  if (!token) {
    return false
  }

  const parts = token.split('.')

  if (parts.length < 3) {
    return false
  }

  return JSON.parse(atob(parts[1]))
}
