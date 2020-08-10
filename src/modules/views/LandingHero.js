import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import Typography from '../components/Typography'
import LandingHeroLayout from './LandingHeroLayout'

const backgroundImage = 'https://source.unsplash.com/random/?recycling'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center'
  },
  button: {
    marginTop: theme.spacing(5),
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
})

function LandingHero (props) {
  const { classes } = props

  return (
    <LandingHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Lorem Ipsum
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Help the environment and get rewarded!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/sign-up/"
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </LandingHeroLayout>
  )
}

LandingHero.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LandingHero)
