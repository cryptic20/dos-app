import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
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
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
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
        <IconButton aria-label="Logout Button" onClick={handleClickOpen}>
          <ExitToAppIcon color="inherit" />
        </IconButton>
      </Tooltip>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Continue to log out?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Logging out will end all your session...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button
            onClick={() => {
              dispatch(setUserJWT(''))
              dispatch(setUserRefreshToken(''))
              dispatch(setAuthenticatedStatus(false))
              dispatch(setUserVerified(false))
              history.push('/')
            }}
            color="primary"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
export default SignedInIcons
