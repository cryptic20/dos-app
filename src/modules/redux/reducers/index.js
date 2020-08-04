import { userTokenReducer } from './userTokenReducer'
import { isAuthReducer } from './isAuthReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
  isAuthenticated: isAuthReducer,
  userJWT: userTokenReducer,
  darkMode: (state = {}) => state
})
