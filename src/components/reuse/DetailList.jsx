import React from 'react'
import styled from 'styled-components'

const DetailList = ({qstn,answ}) => {
  return (
    <LiContainer><h6>{qstn}..........{"  "}<span>{answ}</span></h6></LiContainer>
  )
}

export default DetailList
const LiContainer = styled.li`
    padding: 6px 0px;
    width: 50%;
    h6{
        font-size: 14px;
        color:#eee;
        span{
            color:rgba(255,255,255,.55);
        }
    }
`;