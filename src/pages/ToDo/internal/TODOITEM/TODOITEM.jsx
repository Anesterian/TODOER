import React from 'react'
import PropTypes from 'prop-types'
import { TodoItemBlock } from './styled'
import { styleguide } from '../../../../constants'

const { colors } = styleguide

const TodoItem = ({ todos, deleteTodo }) => (
  <div>
    {todos.map((todo, index) => (
    <TodoItemBlock key={index.toString()}>
      <input type="checkbox" tabIndex={-1} />
      <TodoItemBlock.Title>{ todo }</TodoItemBlock.Title>
      <TodoItemBlock.Button aria-label="Delete" onClick={() => {
          deleteTodo(index)
        }}>Delete</TodoItemBlock.Button>
    </TodoItemBlock>
    ))}
  </div>
)

export default TodoItem
