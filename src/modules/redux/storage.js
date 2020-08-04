import { createStore } from 'redux'
import { allReducers } from './reducers/'
import { loadState, saveState } from './localStorage'
import { throttle } from 'lodash'

const persistedState = loadState()

export const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState({
    isAuthenticated: store.getState().isAuthenticated,
    userJWT: store.getState().userJWT,
    userVerified: store.getState().userVerified
  })
})

store.subscribe(
  throttle(() => {
    saveState({
      isAuthenticated: store.getState().isAuthenticated,
      userJWT: store.getState().userJWT,
      userVerified: store.getState().userVerified
    })
  }, 1000)
)
