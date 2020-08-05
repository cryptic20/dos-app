import { userTokenReducer } from './userTokenReducer'
import { refreshTokenReducer } from './refreshTokenReducer'
import { isAuthReducer } from './isAuthReducer'
import { isVerifiedReducer } from './isVerifiedReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
  isAuthenticated: isAuthReducer,
  userJWT: userTokenReducer,
  refreshToken: refreshTokenReducer,
  userVerified: isVerifiedReducer
})
