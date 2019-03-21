import React from 'react'
import PropTypes from 'prop-types'

import { AntdButton } from './styled'

const Button = ({ children, ...other }) => <AntdButton {...other}>{ children }</AntdButton>

Button.propTypes = {
  children: PropTypes.node
}

Button.defaultProps = {
  children: 'Default button'
}

export default Button
