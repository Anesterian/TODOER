import React, { useState } from 'react'
import { styleguide } from '../../constants'
import { Todo, AddButton } from './styled'
import { TodoItem } from './internal'


const { colors } = styleguide
var index = 0
const ToDo = () => {
  const [isChecked, setChecked] = useState(false)
  const [elements, setElements] = useState([])
  const [activeItemId, setActiveItem] = useState(null)
  const [elemTitle, setElemTitle] = useState()
  const addElement = () => {
    const newElement = {
      id: {index},
      title: titleofelement,
      description: 'second todo text'
    }
    setElements([...elements, newElement])
    index++
  }
  let titleofelement;
  const updateInputValue = (event) => {

    if(!elemTitle){
      titleofelement = ""
    } else {
      titleofelement = elemTitle
    }
  }
  const activeItem = elements.find(i => i.id === activeItemId)

  return(
    <Todo>
      { elements.length == 0 ? <h1>No Todo items here. Please add.</h1> :
      <Todo.List>
        {elements.map((item, i) =>
          <Todo.Item key = {i}>
            <TodoItem key={index}
              title={item.title}
              description={item.description}
              onClick={() => setActiveItem(item.id)}
              color={ item===activeItem ? colors.green : colors.blue}
            />
          <input value = {titleofelement} name = "input" onChange = {updateInputValue}/>
          </Todo.Item>
          )
        }
      </Todo.List>
    }
      <AddButton onClick={addElement}>Add</AddButton>
    </Todo>
  )
}

export default ToDo
