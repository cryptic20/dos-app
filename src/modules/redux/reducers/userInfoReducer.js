export const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return (state = action.data)
    case 'UPDATE_USER_ADDRESS':
      return (state = { ...state, address: action.newAddress })
    case 'UPDATE_USER_INFO':
      return (state = {
        ...state,
        firstName: action.newInfo.firstName,
        lastName: action.newInfo.lastName,
        type: action.newInfo.type,
        phoneNumber: action.newInfo.phoneNumber
      })
    default:
      return state
  }
}
