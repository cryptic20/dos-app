export const isVerifiedReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_USER_VERIFIED':
      return (state = action.check)
    default:
      return state
  }
}
