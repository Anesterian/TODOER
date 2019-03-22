import React, { useState } from 'react'
import { styleguide } from '../../constants'
import { TODO } from './styled'
import { TODOITEM } from './internal'


const { colors } = styleguide

const ToDo = () => {
  const [isChecked, setChecked] = useState(false);
  const [elements, setElements] = useState({id: 1, title: 'First todo', description: 'First todo text'});
  return(
    <TODO>
      <TODO.List>
          <TODO.Item key = {elements.id}>
            <TODOITEM
              title = {elements.title}
              description = {elements.description}
              onClick = {() => setChecked(!isChecked)}
              color = { isChecked ? colors.green : colors.blue}
            />
          </TODO.Item>
      </TODO.List>
    </TODO>
  )
}

export default ToDo
