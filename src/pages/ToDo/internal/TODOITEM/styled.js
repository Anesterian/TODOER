import styled from 'styled-components'
import ReactSVG from 'react-svg'
import { styleguide } from '../../../../constants'
const { colors } = styleguide

const TodoItemBlock = styled.div`
  display: flex;
  max-width: 20rem;
  padding: 1rem;
  background-color: ${props => props.color};
  border-radius: 2rem;
  border: .1rem solid ${colors.mainColor};
  flex-direction: column;
`

TodoItemBlock.Title = styled.h3`
  text-transform: uppercase;
  text-align: center;
`
TodoItemBlock.Button = styled.button`
  text-transform: uppercase;
  color: black;
  border-radius: 2rem;
`
export {
  TodoItemBlock
}
