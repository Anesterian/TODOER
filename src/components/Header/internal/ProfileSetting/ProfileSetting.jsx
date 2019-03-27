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
  const handleInputProfile = (ev) =>{
    (profileName.length && profilePosition.length && imageUrl) ?
      setOpen(!isOpen) : ''
  }
  const [profileName, setprofileName] = useState('')
  const [profilePosition, setprofilePosition] = useState('')

  return (
    <Profile ref={node}>
      { !imageUrl &&
      <Profile.InputBlock>
        <Profile.Input type="file" onChange={(e) => handleImageChange(e)}/>
        <Profile.Input placeholder="Enter your profile name" onChange={event => setprofileName(event.target.value.trim())} />
        <Profile.Input placeholder="Enter your profile rank" onChange={event => setprofilePosition(event.target.value.trim())} />
      </Profile.InputBlock>
      }
      <Profile.Visiblie onClick={(ev) => handleInputProfile(ev)}>
        <Profile.Logo photo={imageUrl} />
        <Profile.AboutBox>
          <Profile.Name>{profileName}</Profile.Name>
          <Profile.Position>{profilePosition}</Profile.Position>
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
