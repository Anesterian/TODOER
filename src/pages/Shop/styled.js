import styled from 'styled-components'

const Shops = styled.div`
  margin: 0 -1rem;
  display: flex;
  flex-direction: column;
`

Shops.List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`
Shops.Item = styled.li`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 20rem;
  flex-direction: column;
`
export {
  Shops
}
