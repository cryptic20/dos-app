import { createStore } from 'redux'
import { rootReducer } from './reducers/'
import { loadState, saveState } from './localStorage'
import { throttle } from 'lodash'

const persistedState = loadState()

export const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState({
    isAuthenticated: store.getState().isAuthenticated,
    userJWT: store.getState().userJWT,
    userVerified: store.getState().userVerified,
    refreshToken: store.getState().refreshToken,
    userInfo: store.getState().userInfo
  })
})

store.subscribe(
  throttle(() => {
    saveState({
      isAuthenticated: store.getState().isAuthenticated,
      userJWT: store.getState().userJWT,
      userVerified: store.getState().userVerified,
      refreshToken: store.getState().refreshToken,
      userInfo: store.getState().userInfo
    })
  }, 1000)
)
