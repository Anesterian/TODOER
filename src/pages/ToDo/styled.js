import styled from 'styled-components'

const TODO = styled.div`
  margin: 0 -1rem;
  display: flex;
`

TODO.List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-right: .1rem solid gray
`
TODO.Item = styled.li`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 20rem;
  flex-direction: column;
`

export {
  TODO
}
