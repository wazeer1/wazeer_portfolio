import React from 'react'
import styled from 'styled-components'
import { MdDone } from "react-icons/md";


const BulletPoints = ({content}) => {
  return (
    <Cover><Container><MdDone size="24px" color='orange'/></Container><h4>{content}</h4></Cover>
  )
}

export default BulletPoints
const Cover = styled.div`
    display: flex;
    gap:10px;
    h4{
        font-size: 14px;
        color:#fff;
    }
`;
const Container = styled.div`
    width: 80px;
`;