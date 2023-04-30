import React from 'react'
import styled from 'styled-components';

const Widget = ({item}) => {
  return (
    <Cover>
        <IconContainer>
            {item.icon}
            </IconContainer>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
    </Cover>
  )
}

export default Widget
const Cover = styled.div`
    width:50%;
    padding: 20px ;
    position:relative;
    /* height: 200px; */
    h4{
        font-size:20px;
        margin-top: 15px;
        color:#fff;
    }
    p{
        color:#fff;
        margin-top:15px;
        font-size: 14px;
    }
    &::after{
        content:'';
        position:absolute;
        width:100%;
        height: 0.6px;
        background: linear-gradient(
                    to right,
                    #eee,
                    var(--secondary-color)
                );
        bottom:0;
        left:0;
    }
`;
const IconContainer = styled.div`
    width:60px;
    height:60px;
    border-radius:50% ;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
                    to right,
                    #ffa50059,
                    var(--secondary-color)
                );
    
`;