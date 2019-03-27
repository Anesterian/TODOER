import React, { useState, useEffect, useRef } from 'react'
import { Profile } from './styled'
import history from '../../../../history'


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

  const [picture, setPicture] = useState('')
  const [imageUrl, setimageUrl] = useState('')

  const handleImageChange = (e) => {
    e.preventDefault()
    let reader = new FileReader()
    let file =  e.target.files[0]

    reader.onloadend = () => {
      setPicture(file)
      setimageUrl(reader.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <Profile ref={node}>
      <input type="file" onChange={(e) => handleImageChange(e)}/>
      <Profile.Visiblie onClick={() => { setOpen(!isOpen) }}>
        <Profile.Logo photo={imageUrl} />
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
