import React from "react";
import styled from "styled-components";

const SubHead = ({ icon, head }) => {
    return (
        <Cover>
            {icon}
            <h4>{head}</h4>
        </Cover>
    );
};

export default SubHead;

const Cover = styled.div`
    display: flex;
    gap: 15px;
    padding: 20px 0px;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.6px;
        background: linear-gradient(to right, #eee, var(--secondary-color));
        bottom: 0;
        left: 0;
    }
    h4 {
        font-size: 20px;
        color: #fff;
    }
`;
