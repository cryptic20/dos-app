import isAuthReducer from './isAuthReducer'
import { combineReducers } from 'redux'
const allReducers = combineReducers({
  isAuthenticated: isAuthReducer
})

export default allReducers
