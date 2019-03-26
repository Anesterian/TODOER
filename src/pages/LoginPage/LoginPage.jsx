import React, { useState } from 'react'
import {Login} from './styled'

const LoginPage = () => {
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
return(
  <Login>
    <Login.Text>Login</Login.Text>
    <Login.Field placeholder="Enter your username" onChange={(event, newValue) => setUsername(newValue)}/>
    <Login.Field placeholder="Enter your password" onChange={(event, newValue) => setPassword(newValue)}/>
    <Login.Field type="submit" label="Submit" onClick={(event) => this.handleClick(event)}/>
  </Login>
)
}
export default LoginPage
