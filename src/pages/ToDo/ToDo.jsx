import React, { useState, useEffect, useRef } from 'react'
import { styleguide } from '../../constants'
import { Todo, AddButton } from './styled'
import { TodoItem, TodoForm } from './internal'
import useTodoState from './useTodoState'
import { Socials } from '../../components'


const { colors } = styleguide
const ToDo = () => {
  const {todos, addTodo, deleteTodo} = useTodoState([])
  return(
    <div>
      <Socials/>
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim()
          if(trimmedText.length > 0){
            addTodo(trimmedText)
          }
        }}
        />
      <TodoItem todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default ToDo
