import { setUserJWT, setUserRefreshToken } from '../../redux/actions/'

const refreshToken = async (store) => {
  await fetch(`${process.env.REACT_APP_BACKEND_GRAPHQL_ENDPOINT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: ` mutation{refreshToken(refreshToken:"${
        store.getState().refreshToken
      }"){token refreshToken success errors} }`
    })
  })
    .then((res) => res.json())
    .then((res) => {
      const data = res.data.refreshToken
      if (data.success) {
        // rewrite refreshToken and userJWT on localStorage if refresh mutation succeeded
        store.dispatch(setUserJWT(data.token))
        store.dispatch(setUserRefreshToken(data.refreshToken))
        window.location.reload(true)
      } else {
        console.log('refresh token has expired! user session will expire!')
      }
    })
    .catch(console.error)
}

export const verifyToken = async (store) => {
  await fetch(`${process.env.REACT_APP_BACKEND_GRAPHQL_ENDPOINT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: ` mutation{verifyToken(token:"${
        store.getState().userJWT
      }"){success errors} }`
    })
  })
    .then((res) => res.json())
    .then((res) => {
      if (!res.data.verifyToken.success) {
        // refreshToken
        refreshToken(store)
      }
    })
    .catch(console.error)
}
