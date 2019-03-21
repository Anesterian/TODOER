import React, { useState, useEffect, useRef } from 'react'
import { Profile } from './styled'
import history from '../../../../history'

const me = 'https://pp.userapi.com/IVnQMdyL3W6r_pGcEKsjk0frpzsjj0mmRjqo5w/i13cmyUVhuI.jpg'

const ProfileSetting = () => {
  const node = useRef()
  const [isOpen, setOpen] = useState(false)
  const handleClick = (event) => {
    if (node.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const signOut = () => {
    history.push('./')
  }

  return (
    <Profile ref={node}>
      <Profile.Visiblie onClick={() => { setOpen(!isOpen) }}>
        <Profile.Logo photo={me} />
        <Profile.AboutBox>
          <Profile.Name>Test Name</Profile.Name>
          <Profile.Position>Position</Profile.Position>
        </Profile.AboutBox>
      </Profile.Visiblie>
      { isOpen &&
        <Profile.SettingsBox>
          <Profile.SettingsItem onClick={signOut}>Logout</Profile.SettingsItem>
        </Profile.SettingsBox>
      }
    </Profile>
  )
}
export default ProfileSetting
