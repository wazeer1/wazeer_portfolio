import React from "react";
import styled from "styled-components";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PercentageGraph = ({ percent, label }) => {
    return (
        <Cover>
            <CircularProgressbar
                value={percent}
                text={`${percent}%`}
                styles={buildStyles({ trailColor: "#666",pathColor:"orange",textColor:"#fff" })}
            />
            <h4>{label}</h4>
        </Cover>
    );
};

export default PercentageGraph;

const Cover = styled.div`
    width: 45%;
    text-align: center;
    margin-top: 15px;
    h4 {
        color: #fff;
        margin-top: 10px;
    }
`;
