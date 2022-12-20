import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`

export const ContainerItem = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: -40px auto 30px auto;
`

export const Header = styled.div`
  width: 100%;
  height: 150px;
  background-color: darkblue;
`

export const HeaderText = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  padding-top: 30px;
`
