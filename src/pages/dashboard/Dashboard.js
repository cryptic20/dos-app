import withRoot from '../../modules/style/withRoot'
import React from 'react'
import AppBarViews from '../../modules/views/AppBarViews'
import AppFooterViews from '../../modules/views/AppFooterViews'
import DashBoardDrawer from '../../modules/views/DashBoardDrawer'
import Container from '@material-ui/core/Container'
import { Switch, Route } from 'react-router-dom'
import { routes } from '../../modules/components/RouteList'

import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

function Dashboard () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <DashBoardDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  )
}

export default withRoot(Dashboard)
