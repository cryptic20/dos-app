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
export const setScheduleData = (data) => ({
  type: 'SET_SCHEDULE_DATA',
  data
})

export const setUserEmail = (data) => ({
  type: 'SET_USER_EMAIL',
  data
})

export const setUserUsername = (data) => ({
  type: 'SET_USER_USERNAME',
  data
})

export const logOut = (state) => ({
  type: 'USER_LOGOUT',
  state
})
