export const setUserJWT = (token) => ({
  type: 'SET_USER_TOKEN',
  token
})

export const setAuthenticatedStatus = (check) => ({
  type: 'AUTHENTICATE_USER',
  check
})

export const setUserVerified = (check) => ({
  type: 'SET_USER_VERIFIED',
  check
})

export const setUserRefreshToken = (token) => ({
  type: 'SET_USER_REFRESH_TOKEN',
  token
})

export const setPickUpData = (data) => ({
  type: 'SET_PICKUP_DATA',
  data
})
