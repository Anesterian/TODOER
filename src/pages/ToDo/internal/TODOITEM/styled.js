import styled from 'styled-components'
import ReactSVG from 'react-svg'
import { styleguide } from '../../../../constants'
const { colors } = styleguide

const TODOITEMBLOCK = styled.div`
  display: flex;
  max-width: 20rem;
  padding: 1rem;
  background-color: ${props => props.color};
  border-radius: 2rem;
  border: .1rem solid ${colors.mainColor};
  flex-direction: column;
`

TODOITEMBLOCK.Title = styled.h3`
  text-transform: uppercase;
`
TODOITEMBLOCK.Description = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
`
export {
  TODOITEMBLOCK
}
