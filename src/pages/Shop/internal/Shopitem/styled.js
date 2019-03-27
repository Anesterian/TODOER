import styled from 'styled-components'
import { styleguide } from '../../../../constants'
const { colors } = styleguide

const SItem = styled.div`
  display: block;
  max-width: 20rem;
  padding: 1rem;
  background-color: ${colors.graySecond};
  border: .1rem solid ${colors.mainColor};
  position: relative;
  `
  SItem.Title = styled.h3`
    text-transform: uppercase;
  `
  SItem.Description = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  `
  SItem.Price = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  `
  export {
    SItem
  }
