import React from 'react'
import { Nav } from './styled'
import { NavItem } from './internal'
import {
  dashboard
} from './img'

const Navigation = () => (
  <Nav>
    <Nav.Menu
      mode='inline'
    >
      <NavItem
        key='1'
        url='/dashboard'
        icon={dashboard}
        heading='Dashboard'
      />
      <Nav.SubMenu
        key='sub1'
        title={<span>Functions</span>}
      >
        <NavItem
          key='2'
          url='/todo'
          icon={dashboard}
          heading='TODO'
        />
        <NavItem
          key='3'
          url='/login'
          icon={dashboard}
          heading='Login'
        />
      </Nav.SubMenu>
    </Nav.Menu>
  </Nav>
)

export default Navigation
