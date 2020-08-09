export const setUserJWT = (token) => ({
  type: 'SET_USER_TOKEN',
  token
})

export const setAuthenticatedStatus = (check) => ({
  type: 'AUTHENTICATE_USER',
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

export const setScheduleData = (data) => ({
  type: 'SET_SCHEDULE_DATA',
  data
})

export const setUserInfo = (data) => ({
  type: 'SET_USER_INFO',
  data
})

export const updateUserAddress = (newAddress) => ({
  type: 'UPDATE_USER_ADDRESS',
  newAddress
})

export const updateUserInfo = (newInfo) => ({
  type: 'UPDATE_USER_INFO',
  newInfo
})
