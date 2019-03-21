import React from 'react'

const WelcomePage = () => {
  const [isChecked, setChecked] = useState(false);


  return(
    <TODO>
      <TODO.List>
        <TODO.Item>
          <TODO.CHECK onClick = {() => setChecked(!isChecked)}/>
          <TODO.TEXT title = {item.title}/>
        </TODO.Item>
      </TODO.List>
    </TODO>
  )
}

export default WelcomePage
