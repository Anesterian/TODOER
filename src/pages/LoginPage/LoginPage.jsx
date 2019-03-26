import React, { useState } from 'react'
import {Login} from './styled'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [value, setValue] = useState('')
  const validateForm = (name, pass) =>  {
    if ((name.length > 0) && (pass.length > 0)) {
      return true
    }
  }
  const handleClick = (event) => {
    setUsername(event.target.username)
  }
  const openInNewTab = (url) => {
    var win = window.open(url, '_blank')
    win.focus()
  }
return(
  <Login>
    <Login.Text>Login</Login.Text>
    <Login.Field placeholder="Enter your username" onChange={event => setUsername(event.target.value)}/>
    <Login.Field placeholder="Enter your password" onChange={event => setPassword(event.target.value)}/>
    <Login.Field type="submit" label="Submit" value="Submit" disabled={!(username.length && password.length)} onClick={() => {openInNewTab('/dashboard')}}/>
  </Login>
  )
}
export default LoginPage
