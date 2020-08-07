export const scheduleDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SCHEDULE_DATA':
      return (state = action.data)
    default:
      return state
  }
}
