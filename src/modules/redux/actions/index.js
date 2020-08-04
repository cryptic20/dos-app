export const setUserJWT = (token) => ({
  type: 'SET_USER_TOKEN',
  token
})

export const setAuthenticatedStatus = (check) => ({
  type: 'AUTHENTICATE_USER',
  check
})
