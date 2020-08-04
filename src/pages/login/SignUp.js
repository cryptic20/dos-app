import withRoot from '../../modules/style/withRoot'
import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import { useHistory, useLocation } from 'react-router-dom'
import AppBarViews from '../../modules/views/AppBarViews'
import Copyright from '../../modules/components/Copyright'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
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

function SignUp () {
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/sign-up' } }
  const classes = useStyles()
  const { register, errors, watch, handleSubmit } = useForm()
  const onSubmit = (input) => {
    console.log(input)
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
              Sign Up
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="username"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                    inputRef={register({
                      pattern: /^\S+\w{8,32}\S{1,}/,
                      minLength: 6,
                      maxLength: 25
                    })}
                  />
                  {errors.username && 'invalid username!'}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    inputRef={register}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password1"
                    label="Password1"
                    type="password"
                    id="password1"
                    autoComplete="current-password"
                    inputRef={register({
                      pattern: /(?=^.{8,15}$)((?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=(.*\d){1,}))((?!.*[",;&|'])|(?=(.*\W){1,}))(?!.*[",;&|'])^.*$/
                    })}
                  />
                  {errors.password1 && 'password too weak!'}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password2"
                    label="Password2"
                    type="password"
                    id="password2"
                    autoComplete="current-password"
                    inputRef={register({
                      validate: (value) => {
                        return value === watch('password1')
                      }
                    })}
                  />
                  {errors.password2 && 'password do not match!'}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link
                    component="button"
                    onClick={() => history.push('/sign-in')}
                    variant="body2"
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box>
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default withRoot(SignUp)
