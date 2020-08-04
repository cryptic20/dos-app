import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { client } from './modules/api/'
import { store } from './modules/redux/storage'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
