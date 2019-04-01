import React from 'react'
import {SItem} from './styled'
import PropTypes from 'prop-types'

const Shopitem = ({ title, description, price, onClick, checked=false }) => (
  <SItem checked={checked} onClick={onClick}>
    <SItem.Title>{ title }</SItem.Title>
    <SItem.Description>{ description }</SItem.Description>
    <SItem.Price>{ price }</SItem.Price>
  </SItem>
)

Shopitem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
}

Shopitem.defaultProps = {
  title: 'Shop item title',
  description: 'Shop item description',
  price: 1
}

export default Shopitem
