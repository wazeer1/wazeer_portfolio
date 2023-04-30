import React from "react";
import styled from "styled-components";
import SideBar from "../includes/SideBar";
import CardAbout from "./CardAbout";
import AboutScreen from "./AboutScreen";
import { Route, Routes } from "react-router-dom";
import ResumeScreen from "./ResumeScreen";
import WorkScreen from "./WorkScreen";
import { AnimatePresence, motion } from 'framer-motion';
import BlogScreen from "./BlogScreen";
import ContactScreen from "./ContactScreen";

const MainScreen = () => {
    return <Cover>
        <SideBar/>
        <CardAbout/>
        <AnimatePresence mode="wait">
        <Routes>
            <Route path='/' element={<AboutScreen/>}/>
            <Route path="/resume" element={<ResumeScreen/>}/>
            <Route path="/works" element={<WorkScreen/>}/>
            <Route path="/blog" element={<BlogScreen/>}/>
            <Route path="/contact" element={<ContactScreen/>}/>
        </Routes>
        </AnimatePresence>
    </Cover>;
};

export default MainScreen;
const Cover = styled.div`
    display: flex;
    width:90%;
    margin: 0 auto;
    @media screen and (max-width:640px){
        width:100%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    /* gap: 10px; */
`;
