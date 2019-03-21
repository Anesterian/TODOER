import React from 'react'
import { ProfileSetting } from './internal'
import { HeaderBlock } from './styled'

import logo from './img/logo.svg'

const Header = () => (
  <HeaderBlock>
    <HeaderBlock.Row>
      <HeaderBlock.Logo src={logo} />
      <ProfileSetting />
    </HeaderBlock.Row>
  </HeaderBlock>
)

export default Header
