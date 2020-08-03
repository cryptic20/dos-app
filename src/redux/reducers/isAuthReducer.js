export const isAuthReducer = (state = false, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return (state = action.check)
    default:
      return state
  }
}
