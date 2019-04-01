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
    setimageUrl('')
    setprofileName('')
    setprofilePosition('')
    setOpen(false)
  }
  const initialUrl = () => window.localStorage.getItem('imageUrl')
  const initialName = () => window.localStorage.getItem('profileName')
  const initialPosition = () => window.localStorage.getItem('profilePosition')
  const [picture, setPicture] = useState('')
  const [imageUrl, setimageUrl] = useState(initialUrl)
  useEffect(() => {
    window.localStorage.setItem('imageUrl', imageUrl)
  }, [imageUrl])

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
    (profileName && profilePosition && imageUrl) ?
      setOpen(!isOpen) : ''
  }
  const [profileName, setprofileName] = useState(initialName)
  useEffect(() => {
    window.localStorage.setItem('profileName', profileName)
  }, [profileName])
  const [profilePosition, setprofilePosition] = useState(initialPosition)
  useEffect(() => {
    window.localStorage.setItem('profilePosition', profilePosition)
  }, [profilePosition])

  return (
    <Profile ref={node}>
      { (imageUrl && profileName && profilePosition) ?
        ''
      :
      <Profile.InputBlock>
        { (profileName && profilePosition) ?
          <Profile.Input type="file" onChange={(e) => handleImageChange(e)}/>
        :
        ''
        }
        <Profile.Input placeholder="Enter your profile name"
          onChange={event => setprofileName(event.target.value.trim())} />
        <Profile.Input placeholder="Enter your profile rank"
          onChange={event => setprofilePosition(event.target.value.trim())} />
      </Profile.InputBlock>
      }
      { (imageUrl && profileName && profilePosition) ?
      <Profile.Visiblie onClick={(ev) => handleInputProfile(ev)}>
        <Profile.Logo photo={imageUrl} />
        <Profile.AboutBox>
          <Profile.Name>{profileName}</Profile.Name>
          <Profile.Position>{profilePosition}</Profile.Position>
        </Profile.AboutBox>
      </Profile.Visiblie>
        :
        ''
    }
      { isOpen &&
        <Profile.SettingsBox>
          <Profile.SettingsItem onClick={signOut}>Logout</Profile.SettingsItem>
        </Profile.SettingsBox>
      }
    </Profile>
  )
}
export default ProfileSetting
