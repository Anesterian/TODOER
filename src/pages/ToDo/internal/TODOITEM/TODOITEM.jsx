import React from 'react'
import PropTypes from 'prop-types'
import { TODOITEMBLOCK } from './styled'
import { styleguide } from '../../../../constants'

const { colors } = styleguide

const TODOITEM = ({ title, description, onClick, color }) => (
  <TODOITEMBLOCK onClick={onClick} color={color}>
    <TODOITEMBLOCK.Title>{ title }</TODOITEMBLOCK.Title>
    <TODOITEMBLOCK.Description>{ description }</TODOITEMBLOCK.Description>
  </TODOITEMBLOCK>
)

TODOITEM.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

TODOITEM.defaultProps = {
  title: 'Name',
  description: 'Description',
  color: colors.asideColor,
}

export default TODOITEM
