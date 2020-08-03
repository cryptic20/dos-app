import React from 'react'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import { useSelector, useDispatch } from 'react-redux'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

import { setUserJWT, setAuthenticatedStatus } from '../../redux/actions/'
import { Redirect } from 'react-router-dom'

export default function NavIcons () {
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  const dispatch = useDispatch()
  return (
    <div style={{ marginLeft: 'auto' }}>
      <Grid container direction="row" justify="center" alignItems="center">
        {isAuthenticated ? (
          <Tooltip title="Logout">
            <IconButton
              aria-label="Logout Button"
              onClick={() => {
                dispatch(setUserJWT(''))
                dispatch(setAuthenticatedStatus(false))
              }}
            >
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <React.Fragment>
            <Button color="default" href="/login">
              Login
            </Button>
            <Button color="default" href="/signup">
              Signup
            </Button>
          </React.Fragment>
        )}
      </Grid>
    </div>
  )
}
