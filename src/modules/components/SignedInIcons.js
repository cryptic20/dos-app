import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Dashboard from '@material-ui/icons/Dashboard'
import { useDispatch } from 'react-redux'
import {
  setUserJWT,
  setAuthenticatedStatus,
  setUserVerified,
  setUserRefreshToken
} from '../redux/actions/'
import { useHistory, useLocation } from 'react-router-dom'

function SignedInIcons () {
  const dispatch = useDispatch()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const history = useHistory()
  return (
    <React.Fragment>
      {isHome && (
        <Tooltip title="go to dashboard">
          <IconButton
            aria-label="Logout Button"
            onClick={() => {
              history.push('/dashboard')
            }}
          >
            <Dashboard color="inherit" />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title="Logout">
        <IconButton
          aria-label="Logout Button"
          onClick={() => {
            dispatch(setUserJWT(''))
            dispatch(setUserRefreshToken(''))
            dispatch(setAuthenticatedStatus(false))
            dispatch(setUserVerified(false))
            history.push('/')
          }}
        >
          <ExitToAppIcon color="inherit" />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  )
}
export default SignedInIcons
