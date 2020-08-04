export const userTokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_USER_TOKEN':
      return (state = action.token)
    default:
      return state
  }
}
