import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { verifyToken } from './refreshToken'
import { store } from '../../redux/storage.js'

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_BACKEND_GRAPHQL_ENDPOINT}`
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = store.getState().userJWT
  // this will verify if token is still valid, if not, it will refresh and rewrite value on localStorage
  verifyToken(store)

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : ''
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
