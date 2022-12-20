import styled from 'styled-components'

export const TableLine = styled.tr`
  text-align: center;
`

export const TableColumn = styled.td`
  padding: 10px;
  text-align: center;
`

export const Category = styled.p<{ color: string }>`
  padding: 5px 10px;
  border-radius: 5px;
  width: max-content;
  margin: 0 auto;
  background-color: ${props => props.color || '#000'};
  color: #fff;
`

export const Value = styled.p<{ expense: boolean }>`
  color: ${props => (props.expense ? 'red' : 'green')};
`
