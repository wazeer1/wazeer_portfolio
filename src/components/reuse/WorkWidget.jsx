import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const WorkWidget = ({item}) => {
    const [hover,setHover]=useState()
    const navigate = useNavigate('')
  return (
    <Cover onMouseEnter={()=>setHover(item.id)} onMouseLeave={()=>setHover('')}>
        <img src={item.logo} />
        {hover == item.id &&
            <ViewContainer><a href={item.url} target='blank'>{item.name}</a></ViewContainer>
        }
    </Cover>
  )
}

export default WorkWidget

const Cover = styled.div`
    width:100%;
    padding: 20px;
    background-color: #666;
    margin-bottom: 15px;
    position:relative;
    img{
        width: 100%;
    }
`;
const ViewContainer = styled.div`
    position: absolute;
    width:100%;
    height:45px;
    background: #ffffff40;
    backdrop-filter: blur(5px);
    top:50%;
    left:0;
    padding:10px 20px;
    transition:.4s ease;
    cursor:pointer;
`;