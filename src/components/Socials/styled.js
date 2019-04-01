import styled from 'styled-components'
import { styleguide } from '../../constants'
import ReactSVG from 'react-svg'

const { colors } = styleguide

const SocialsBlock = styled.div`
  width: 4.8rem;
  position: fixed;
  right: 0;
  bottom: 13.5rem;
  z-index: 10;
`
SocialsBlock.Item = styled.a`
  display: block;
  width: 100%;
  height: 4.8rem;
  background-size: 2rem;
  background-position: 50%;
  background-repeat: no-repeat;
  transition: all .2s ease;
  background-color: black;
`

export {
  SocialsBlock
}
