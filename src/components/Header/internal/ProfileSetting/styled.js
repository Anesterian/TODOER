import styled from 'styled-components'
import { styleguide } from '../../../../constants'
const { colors } = styleguide

const Profile = styled.div`
  height: 100%;
  position: relative;
`
Profile.Visiblie = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  padding: 0 2rem;
  background-color: ${colors.asideColor};
`
Profile.Logo = styled.div`
  width: 5rem;
  min-width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background: url(${props => props.photo}) center no-repeat;
  background-size: cover;
  margin-right: 2rem;
`
Profile.AboutBox = styled.div``
Profile.Name = styled.h4`
margin-bottom: 0;
`
Profile.Position = styled.p``
Profile.SettingsBox = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 144%;
  left: 0;
  width: 100%;
  background-color: ${colors.asideColor};
  border-top: .1rem solid ${colors.mainBgColor};
`
Profile.SettingsItem = styled.li`
  padding: 2rem;
  text-align: center;
  cursor: pointer;
`

// const Profile = styled.div`
// background-color: #374355;
// display: block;
// width: 10rem;
// height: 5rem;
// margin-top: 100px;
// `
export {
  Profile
}
