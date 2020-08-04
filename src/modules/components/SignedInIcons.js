import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useDispatch } from 'react-redux'
import { setUserJWT, setAuthenticatedStatus } from '../redux/actions/'
import { useHistory } from 'react-router-dom'

function SignedInIcons () {
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <React.Fragment>
      <Tooltip title="Logout">
        <IconButton
          aria-label="Logout Button"
          onClick={() => {
            dispatch(setUserJWT(''))
            dispatch(setAuthenticatedStatus(false))
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
