import React from 'react'
import styled from 'styled-components'

const Heading = ({content1,content2}) => {
  return (
    <Cover><span>{content1}</span>{" "}{content2}</Cover>
  )
}

export default Heading
const Cover = styled.div`
    padding: 20px 20px;
    position: relative;
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
    color:#fff;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    z-index: 1;
    span{
        color:orange;
    }
    &::before{
        content: '';
        width: 25px;
        height:25px;
        position: absolute;
        border-radius: 50%;
        left:1%;
        top:30%;
        transform: rotate(45deg);
        z-index: -1;
        background: linear-gradient(
                    to right,
                    orange,
                    var(--secondary-color)
                );

    }
`;