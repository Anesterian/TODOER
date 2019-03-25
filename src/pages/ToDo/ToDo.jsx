import React, { useState } from 'react'
import { styleguide } from '../../constants'
import { Todo, AddButton } from './styled'
import { TodoItem } from './internal'


const { colors } = styleguide
var index = 0
const ToDo = () => {
  const [isChecked, setChecked] = useState(false)
  const [elements, setElements] = useState([])
  const [elemTitle, setElemTitle] = useState('')
  const [elemDesc, setElemDesc] = useState('')
  const addElement = () => {
    const newElement = {
      id: {index},
      title: elemTitle,
      description: elemDesc,
    }
    setElements([...elements, newElement])
    index++
  }
  const handleInputChanges = (event) =>{
    setElemTitle(event.target.value)
  }
  return(
    <Todo>
      { elements.length == 0 ? <h1>No Todo items here. Please add.</h1> :
      <Todo.List>
        {elements.map((item, i) =>
          <Todo.Item key={i}>
            <TodoItem
              key={item.id}
              title={item.title}
              description={item.description}
              checked={item.checked}
              onClick={() => item.checked = !item.checked}
              color={ item.checked ? colors.green : colors.blue}
            />
          <input name="title" type="text" value={elemTitle} onChange={handleInputChanges}/>
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
