import styled from 'styled-components'
import { Field } from 'redux-form'

export const Container = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 25px -1px rgba(0, 0, 0, 0.55);
  border: 5px solid white;
  text-align: center;
  width: 30%;
`

export const Input = styled(Field)`
  border: none;
  border-radius: 13px;
  margin: 5px;
  font-size: 17px;
  height: 50px;
  width: 100%;
  margin-bottom: 30px;
  padding-left: 15px;
  background: #ffffff8a;
  color: #125162;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #125162;
  }
  :-ms-input-placeholder {
    color: #125162;
  }
`
export const Button = styled.button`
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
  background: #fffc;
  margin-bottom: 40px;
  color: #125162;
  border: 0px;
  transition: all 0.3s;
  width: 100%;
  &:hover {
    background: #ffffff;
    box-shadow: 0px 0px 15px #00000047;
    transform: translateY(-1px);
  }
`
export const Title = styled.h2`
  margin: 15px 0 30px;
  text-transform: uppercase;
  color: #fff;
`
export const Error = styled.div`
  margin-bottom: 30px;
  text-align: left;
  color: black;
  border-radius: 13px;
  padding: 17px 20px;
  background: #ff04045c;
`
