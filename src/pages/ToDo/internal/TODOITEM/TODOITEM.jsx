import React from 'react'
import PropTypes from 'prop-types'
import { TodoItemBlock } from './styled'
import { styleguide } from '../../../../constants'

const { colors } = styleguide

const TodoItem = ({ title, description, onClick, color }) => (
  <TodoItemBlock onClick={onClick} color={color}>
    <TodoItemBlock.Title>{ title }</TodoItemBlock.Title>
    <TodoItemBlock.Description>{ description }</TodoItemBlock.Description>
  </TodoItemBlock>
)

TodoItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

TodoItem.defaultProps = {
  title: 'Name',
  description: 'Description',
  color: colors.asideColor,
}

export default TodoItem
