const isAuthReducer = (state = false, action) => {
  switch (action.type) {
    case 'GET_USER_AUTH':
      return (state = action.authenticated)
    default:
      return state
  }
}
export default isAuthReducer
