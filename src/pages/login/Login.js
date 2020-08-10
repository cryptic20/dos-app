import withRoot from '../../modules/style/withRoot'
import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import AppBarViews from '../../modules/views/AppBarViews'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { useDispatch, useSelector } from 'react-redux'
import {
  setUserJWT,
  setAuthenticatedStatus,
  setUserRefreshToken,
  setUserInfo
} from '../../modules/redux/actions/'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { LOG_IN } from '../../modules/api/'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import Copyright from '../../modules/components/Copyright'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random/?recycling)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(15, 5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

function SignIn () {
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/sign-in' } }
  const classes = useStyles()
  const dispatch = useDispatch()
  const [errorAlert, setErrorAlert] = useState(false)
  const { register, handleSubmit } = useForm()
  const state = useSelector((state) => state)
  const isAuthenticated = state.isAuthenticated
  const userVerified = state.userInfo.verified
  const [tokenAuth, { loading, error }] = useMutation(LOG_IN, {
    onCompleted: (data) => {
      console.log(data)
      if (!data.tokenAuth.success) {
        setErrorAlert(true)
      } else {
        dispatch(setUserInfo(data.tokenAuth.user))
        dispatch(setUserJWT(data.tokenAuth.token))
        dispatch(setUserRefreshToken(data.tokenAuth.refreshToken))
        dispatch(setAuthenticatedStatus(true))
        history.replace(from)
      }
    }
  })

  const onSubmit = (input) => {
    tokenAuth({
      variables: { email: input.email, password: input.password }
    })
  }
  if (isAuthenticated && userVerified) {
    return <Redirect push to="/dashboard" />
  } else if (isAuthenticated && !userVerified) {
    return <Redirect push to="/verify" />
  }
  return (
    <React.Fragment>
      <Grid container component="main" className={classes.root}>
        <AppBarViews />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {errorAlert && <Alert severity="error">Invalid credentials!</Alert>}
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
                inputRef={register}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={register}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                name="remember"
                inputRef={register}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgotpassword" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Error: Please try again</p>}
          </div>
          <Copyright />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default withRoot(SignIn)
