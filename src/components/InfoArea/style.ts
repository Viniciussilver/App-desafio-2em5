import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 5px #ccc;
  background-color: white;

  .resume-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .title {
      font-size: 16px;
      font-weight: 400;
    }

    .text-current {
      font-weight: bold;
    }
  }
`
export const TextCurrenty = styled.div<{ value?: boolean }>`
  font-weight: bold;
  color: ${props => (props.value ? 'green' : 'red')};
`

export const MonthArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  gap: 10px;

  button {
    font-weight: 600;
    padding: 4px 6px;
    color: #fff;
    background-color: blue;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`
