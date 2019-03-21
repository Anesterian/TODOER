import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import {
  Navigation
} from '../'

import {
  Main,
  Content,
  Sidebar
} from '../../styles'

import { Header } from '../'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props =>
       <Main>
          <Header />
          <Sidebar>
            <Navigation />
          </Sidebar>
          <Content>
            <Component {...props} />
          </Content>
        </Main>
    }
  />
)

export default PrivateRoute
