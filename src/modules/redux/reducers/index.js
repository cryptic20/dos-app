import { userTokenReducer } from './userTokenReducer'
import { refreshTokenReducer } from './refreshTokenReducer'
import { isAuthReducer } from './isAuthReducer'
import { pickUpDataReducer } from './pickUpDataReducer'
import { scheduleDataReducer } from './scheduleDataReducer'
import { userInfoReducer } from './userInfoReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
  isAuthenticated: isAuthReducer,
  userJWT: userTokenReducer,
  refreshToken: refreshTokenReducer,
  userInfo: userInfoReducer,
  pickUpData: pickUpDataReducer,
  scheduleData: scheduleDataReducer
})

export const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    localStorage.removeItem('state')
    state = undefined
  }

  return allReducers(state, action)
}
