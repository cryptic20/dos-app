import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import AppBar from '../components/AppBar'
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar'
import NavIcons from './NavIcons'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const styles = (theme) => ({
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between'
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.dark
  }
})

function AppBarViews (props) {
  const history = useHistory()
  const { classes } = props
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            component="button"
            className={classes.title}
            onClick={() => history.push('/')}
          >
            {'DOS'}
          </Link>
          <div className={classes.right}>
            <NavIcons />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  )
}

AppBarViews.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppBarViews)
