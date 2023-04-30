import React from 'react'
import styled from 'styled-components'

const SkillBar = ({label,percent}) => {
  return (
    <Container>
        <h4>{label}</h4>
        <Cover percent={percent}>
            <PercentDiv percent={percent}></PercentDiv>
            <span>{percent}</span>
        </Cover>
    </Container>
  )
}

export default SkillBar
const Container = styled.div`
    padding: 10px 0px;
    h4{
        font-size:14px ;
        color:#fff;
    }
`;
const Cover = styled.div`
    margin-top: 10px;
    width:100%;
    height:10px;
    background: #666;
    border-radius: 10px;
    position: relative;
    span{
        font-size: 12px;
        color:#fff;
        position: absolute;
        top:-15px;
        left:${({percent})=>percent};
    }
`;
const PercentDiv = styled.div`
    width: ${({percent})=>percent};
    height: 100%;
    background-color: orange;
    border-radius: 10px;
`;