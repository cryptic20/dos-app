import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRoute ({ children, ...rest }) {
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  const userVerified = useSelector((state) => state.userInfo.verified)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated && userVerified ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `${
                isAuthenticated && !userVerified ? '/verify' : '/sign-in'
              }`,
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
