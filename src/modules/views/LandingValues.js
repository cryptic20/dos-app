import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'
import EcoIcon from '@material-ui/icons/Eco'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.common.white,
    textAlign: 'center'
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180
  }
})

function LandingValues (props) {
  const { classes } = props

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <EcoIcon fontSize="large" color="primary" />
              <Typography variant="h6" className={classes.title}>
                Recycle
              </Typography>
              <Typography variant="h5">
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'}
                {
                  'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <LocalShippingIcon fontSize="large" color="primary" />
              <Typography variant="h6" className={classes.title}>
                schedule pick up
              </Typography>
              <Typography variant="h5">
                {'Ut enim ad minim veniam,'}
                {
                  'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <MonetizationOnIcon fontSize="large" color="primary" />
              <Typography variant="h6" className={classes.title}>
                Earn Money
              </Typography>
              <Typography variant="h5">
                {'Duis aute irure dolor in reprehenderit in voluptate velit '}
                {'esse cillum dolore eu fugiat nulla pariatur. '}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

LandingValues.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LandingValues)
