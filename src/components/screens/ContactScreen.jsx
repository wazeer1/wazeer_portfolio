import React from "react";
import Container from "../reuse/Container";
import Heading from "../reuse/Heading";
import { motion } from "framer-motion";
import styled from "styled-components";
import DetailList from "../reuse/DetailList";

const ContactScreen = () => {
    return (
        <motion.div
            className="page"
            initial={{ x: "-80%" }}
            animate={{ x: 0 }}
            transition={{
                ease: "linear",
                duration: 4,
                x: { duration: 1 },
            }}
            exit={{ x: "100%" }}
        >
            <Container>
                <Heading content1="Contact" content2="Me" />
                <Cover>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7807.523572722911!2d75.47301644144738!3d11.921659403221595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43babc9e2a78b%3A0x18262db5d8caed97!2sKoodali%2C%20Kerala%20670592!5e0!3m2!1sen!2sin!4v1682846869434!5m2!1sen!2sin" style={{width:"100%", height:"550", border:0, }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <Details>
                <DetailList qstn="Address" answ="Kannur,Kerala India"/>
                <DetailList qstn="Email" answ="mailtowazeer@gmail.com"/>
                <DetailList qstn="Phone" answ="9995819386"/>
                <DetailList qstn="Freelance" answ="Available"/>
                </Details>
                </Cover>

            </Container>
        </motion.div>
    );
};

export default ContactScreen;

const Cover = styled.div`
    padding: 20px;
`;
const Details = styled.div`
    display: flex;
    flex-wrap: wrap;
`;