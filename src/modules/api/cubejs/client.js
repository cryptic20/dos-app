import cubejs from '@cubejs-client/core'

const API_URL = `${process.env.REACT_APP_CUBE_JS_API_URL}`

export const cubeJsApi = cubejs(`${process.env.REACT_APP_CUBE_JS_API}`, {
  apiUrl: API_URL + '/cubejs-api/v1'
})
