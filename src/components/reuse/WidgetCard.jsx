import React from 'react'
import styled from 'styled-components'

const WidgetCard = ({present=false,date,title,company,description}) => {
  return (
    <Cover>
        <DateData present={present}>{date}</DateData>
        <TitleData >{title}</TitleData>
        <CompanyData>{company}</CompanyData>
        <DescriptionData>{description}</DescriptionData>
    </Cover>
  )
}

export default WidgetCard

const Cover = styled.div`
    padding: 20px 0px;
`;
const DateData = styled.span`
    padding: 5px;
    color:${({present})=>present ? 'orange' : '#666'};
    border:.5px solid ${({present})=>present ? 'orange' : '#666'};
    border-radius: 5px;
    font-size: 12px;
`;
const TitleData = styled.h3`
    margin-top:20px;
    font-size: 22px;
    color:#fff;
`;
const CompanyData = styled.p`
    font-size: 14px;
    color:#666;
`;
const DescriptionData = styled.h5`
    color:#666;
    font-size: 18px;
    margin-top: 20px;
`;