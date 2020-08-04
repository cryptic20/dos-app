import { userTokenReducer } from './userTokenReducer'
import { isAuthReducer } from './isAuthReducer'
import { isVerifiedReducer } from './isVerifiedReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
  isAuthenticated: isAuthReducer,
  userJWT: userTokenReducer,
  userVerified: isVerifiedReducer,
  darkMode: (state = {}) => state
})
