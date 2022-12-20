import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  gap: 12px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 5px #ccc;
  background-color: white;

  button {
    width: 200px;
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
    background-color: blue;
    color: #fff;
    cursor: pointer;
  }
`

export const Input = styled.input`
  width: 220px;
  padding: 5px 10px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Select = styled.select`
  width: 220px;
  padding: 5px 10px;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  font-weight: normal;
  color: #777777;
  outline: none;
  cursor: pointer;
`
