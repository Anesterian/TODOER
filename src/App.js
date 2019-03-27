import React, { Fragment } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'

import {
  PrivateRoute
} from './components'

import {
  WelcomePage,
  Dashboard,
  ToDo,
  LoginPage,
  Shop
} from './pages'

function App () {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path='/' component={LoginPage} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/todo' component={ToDo} />
          <PrivateRoute path='/welcome' component={WelcomePage} />
          <PrivateRoute path='/shop' component={Shop} />
          <Route path='*' render={() => <div>404</div>} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
