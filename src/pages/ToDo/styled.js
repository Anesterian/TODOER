import styled from 'styled-components'

const Todo = styled.div`
  margin: 0 -1rem;
  display: flex;
  flex-direction: column;
`

Todo.List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-right: .1rem solid gray
`
Todo.Item = styled.li`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 20rem;
  flex-direction: column;
`
const AddButton = styled.button`
  max-width: 10rem;
  background-color: green;
  border-radius: 3rem;
  outline: none;
  `
export {
  Todo,
  AddButton
}
