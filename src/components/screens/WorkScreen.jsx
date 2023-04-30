import React from "react";
import Container from "../reuse/Container";
import Heading from "../reuse/Heading";
import { motion } from "framer-motion";
import styled from "styled-components";
import WorkWidget from "../reuse/WorkWidget";
import ChatLogo from "../assets/images/chat_app.webp"
import EcomLogo from "../assets/images/ecom.png"
import EdtechLogo from "../assets/images/edtech.png"
import SpotifyLogo from "../assets/images/spotify_logo.png"


const WorkScreen = () => {
    const Datas = [
        {
            id:1,
            name:"Chat App with MERN stack",
            url:"https://github.com/wazeer1/mearn-chat-app-frontend.git",
            logo:ChatLogo
        },
        {
            id:2,
            name:"Ecommerce App using React & Django",
            url:"https://github.com/wazeer1/KartMyCart.git",
            logo:EcomLogo
        },
        {
            id:3,
            name:"Edtech platform using React & Django",
            url:"https://github.com/wazeer1/edtech.git",
            logo:EdtechLogo
        },
        {
            id:4,
            name:"Spotify clone using react & spotify api",
            url:"https://github.com/wazeer1/spotify.git",
            logo:SpotifyLogo
        }
    ]
    return (
        <motion.div
            className="page"
            initial={{ x: "-80%" }}
            animate={{ x: 0 }}
            transition={{
                ease: "linear",
                duration: 4,
                x: { duration: 1 }
              }}
            exit={{ x: "100%" }}
        >
            <Container>
                <Heading content1="Recent" content2="Works" />
                <Cover>
                    {Datas.map((item)=>(
                        <WorkWidget item={item}/>
                    ))}
                </Cover>
            </Container>
        </motion.div>
    );
};

export default WorkScreen;

const Cover = styled.div`
    padding: 20px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

`;