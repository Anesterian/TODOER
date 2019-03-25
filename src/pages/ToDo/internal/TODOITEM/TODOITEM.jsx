import React from 'react'
import PropTypes from 'prop-types'
import { TodoItemBlock } from './styled'
import { styleguide } from '../../../../constants'

const { colors } = styleguide

const TodoItem = ({ title, description, color, checked,...rest }) => (
  <TodoItemBlock color={color} checked={checked} {...rest}>
    <TodoItemBlock.Title>{ title }</TodoItemBlock.Title>
    <TodoItemBlock.Description>{ description }</TodoItemBlock.Description>
  </TodoItemBlock>
)

TodoItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  checked: PropTypes.bool,
}

TodoItem.defaultProps = {
  title: 'Name',
  description: 'Description',
  color: colors.asideColor,
  checked: false
}

export default TodoItem
