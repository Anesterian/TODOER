import React from 'react'
import { Item } from './styled'

const NavItem = ({ id, url, icon, heading, ...other }) => (
  <Item key={id} {...other}>
    <Item.Link to={url}>
      <Item.Inner>
        <Item.Icon className='icon' src={icon} />
        <Item.Heading>{ heading }</Item.Heading>
      </Item.Inner>
    </Item.Link>
  </Item>
)

export default NavItem
