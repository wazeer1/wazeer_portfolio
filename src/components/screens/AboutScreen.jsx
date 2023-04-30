import React from "react";
import Container from "../reuse/Container";
import Heading from "../reuse/Heading";
import styled from "styled-components";
import DetailList from "../reuse/DetailList";
import { FaReact } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import Widget from "./Widget";
import { AnimatePresence, motion } from "framer-motion";

const AboutScreen = () => {
    const Datas = [
        {
            id: 1,
            title: "Frontend Development",
            description:
                "Modern and mobile-ready website that will help you reach all of your marketing.",
            icon: <FaReact size="24px" color="orange" />,
        },
        {
            id: 2,
            title: "Backend Developer",
            description:
                "Modern and mobile-ready website that will help you reach all of your marketing.",
            icon: <SiPython size="24px" color="orange" />,
        },
        {
            id: 3,
            title: "SEO",
            description:
                "Modern and mobile-ready website that will help you reach all of your marketing.",
            icon: <TbSeo size="24px" color="orange" />,
        },
        {
            id: 4,
            title: "Design",
            description:
                "Modern and mobile-ready website that will help you reach all of your marketing.",
            icon: <MdDesignServices size="24px" color="orange" />,
        },
    ];
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
                <Heading content1="About" content2="Me" />
                <Contents>
                    <p>
                        I am Wazeer ahmed, web developer from kerala, India. I
                        have rich experience in web designing and building and
                        customization, also I am good at backend. I love to talk
                        with you about our unique.
                    </p>
                </Contents>
                <Details>
                    <ul>
                        <DetailList qstn="AGE" answ="24" />
                        <DetailList qstn="RESIDENCE" answ="India" />
                        <DetailList qstn="FREELANCE" answ="Available" />
                        <DetailList qstn="ADDRESS" answ="Kannur,Kerala,India" />
                    </ul>
                </Details>
                <Heading content1="My" content2="Service" />
                <WidgetContainer>
                    {Datas.map((item) => (
                        <Widget item={item} />
                    ))}
                </WidgetContainer>
            </Container>
        </motion.div>
    );
};

export default AboutScreen;
const Contents = styled.div`
    padding: 20px;
    color: #eee;
    font-size: 20px;
    p {
        color: rgba(255, 255, 255, 0.55);
    }
`;
const Details = styled.div`
    padding: 20px;
    ul {
        display: flex;
        flex-wrap: wrap;
    }
`;
const WidgetContainer = styled.div`
    padding: 0px 20px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        width: 0.6px;
        height: 100%;
        background: linear-gradient(to right, #eee, var(--secondary-color));
        top: 0;
        left: 50%;
    }
`;
