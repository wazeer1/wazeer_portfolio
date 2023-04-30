import React from 'react'
import styled from 'styled-components'

const Container = ({children}) => {
  return (
    <Cover>{children}</Cover>
  )
}

export default Container
const Cover = styled.div`
    width:600px;
    background-color: var(--secondary-color);
    height:540px;
    margin-top: 30px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    position: relative;
    z-index: 1;
    padding: 30px 0px;
    overflow-y: scroll;
    @media screen and (max-width:640px){
        width:90%;
        margin:0 auto;
        margin-top: 30px;
    }
`;