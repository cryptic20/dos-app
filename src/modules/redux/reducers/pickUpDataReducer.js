export const pickUpDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PICKUP_DATA':
      return (state = [...state, action.data])
    default:
      return state
  }
}
