export const userInfoReducer = (
  state = { username: '', email: '' },
  action
) => {
  switch (action.type) {
    case 'SET_USER_USERNAME':
      return (state = { ...state, username: action.data })
    case 'SET_USER_EMAIL':
      return (state = { ...state, email: action.data })
    default:
      return state
  }
}
