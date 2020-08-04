import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, SignUp, ForgotPassword } from './login/'
import Dashboard from './dashboard/Dashboard'
import LandingPage from './landing/LandingPage'
import PrivateRoute from '../modules/components/PrivateRoute'

function App () {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/sign-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
