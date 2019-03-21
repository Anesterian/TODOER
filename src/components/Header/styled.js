import styled from 'styled-components'
import { styleguide } from '../../constants'
import ReactSVG from 'react-svg'

const { colors } = styleguide

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  background: ${colors.headerColor};
  z-index: 5;
`
HeaderBlock.Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
HeaderBlock.Logo = styled(ReactSVG)`
  width: 100%;
  max-width: 20rem;
  margin-left: 2rem;
`
export {
  HeaderBlock
}
