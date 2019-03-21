import React, { Fragment } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'

import {
  PrivateRoute
} from './components'

import {
  LoginPage,
  WelcomePage,
  Dashboard,
  ToDo
} from './pages'

function App () {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path='/' component={WelcomePage} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/todo' component={ToDo} />
          <Route exact path='/login' component={LoginPage} />

          <Route path='*' render={() => <div>404</div>} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
