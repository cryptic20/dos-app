export const isAuthenticated = (authenticated) => ({
  type: 'GET_USER_AUTH',
  authenticated
})

export const userJWT = (token) => ({
  type: 'USER_TOKEN',
  token
})
