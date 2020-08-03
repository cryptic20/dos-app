import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useDispatch, useSelector } from 'react-redux'
import { setUserJWT, setAuthenticatedStatus } from '../../redux/actions/'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { LOG_IN } from '../../api/'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
function Copyright () {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://dos-app-nyc.herokuapp.com">
        DOS APP
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function SignIn () {
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/login' } }
  const classes = useStyles()
  const dispatch = useDispatch()
  const [errorAlert, setErrorAlert] = useState(false)
  const { register, handleSubmit } = useForm()
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  const [tokenAuth, { loading, error }] = useMutation(LOG_IN, {
    onCompleted: (data) => {
      if (!data.tokenAuth.success) {
        setErrorAlert(true)
      } else {
        history.replace(from)
        dispatch(setUserJWT(data.tokenAuth.token))
        dispatch(setAuthenticatedStatus(true))
      }
    }
  })

  const onSubmit = (input) => {
    console.log(input)
    tokenAuth({
      variables: { email: input.email, password: input.password }
    })
  }
  if (isAuthenticated) {
    return <Redirect push to="/dashboard" />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {errorAlert && <Alert severity="error">Invalid credentials!</Alert>}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
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
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: Please try again</p>}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
