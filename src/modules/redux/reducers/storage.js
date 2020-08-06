const persistedState = loadState()
const store = createStore(app, persistedState)
store.subscribe(() => {
  saveState({
    darkMode: store.getState().darkMode
  })
})

store.subscribe(
  throttle(() => {
    saveState({
      darkMode: store.getState().darkMode
    })
  }, 1000)
)
