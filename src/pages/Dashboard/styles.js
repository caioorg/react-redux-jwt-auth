import styled from 'styled-components'

export const Container = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Title = styled.h1`
  color: #fff;
  text-shadow: 2px 2px 9px #000000;
  width: 30%;
  text-align: center;
  line-height: 45px;
`
export const Logout = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  border: 0;
  background: transparent;
  color: #fff;
  border-bottom: 1px solid #fff;
  padding: 5px 10px;
  cursor: pointer;
`
