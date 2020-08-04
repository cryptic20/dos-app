import withRoot from '../../modules/style/withRoot'
import React from 'react'
import DashBoardDrawer from '../../modules/views/DashBoardDrawer'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom'
import Analytics from './Analytics'
import Schedule from './Schedule'
import PickUp from './PickUp'
import Settings from './Settings'

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
        <Switch>
          <Route exact path="/dashboard">
            <Analytics />
          </Route>
          <Route path="/dashboard/schedule">
            <Schedule />
          </Route>
          <Route path="/dashboard/pickup">
            <PickUp />
          </Route>
          <Route path="/dashboard/settings">
            <Settings />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default withRoot(Dashboard)
