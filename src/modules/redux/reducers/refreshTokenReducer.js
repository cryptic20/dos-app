export const refreshTokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_USER_REFRESH_TOKEN':
      return (state = action.token)
    default:
      return state
  }
}
