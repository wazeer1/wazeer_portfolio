import React from "react";
import styled from "styled-components";
import Bg from "../assets/images/bg.jpeg";
import PrPic from "../assets/images/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaDribbble, FaTwitter, FaGithub } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";
import Resume from "../assets/resume/wazeer_resume.pdf";
import { useNavigate } from "react-router-dom";

const CardAbout = () => {
    const navigate = useNavigate("");
    return (
        <Cover>
            <ImageContainer bg={Bg}></ImageContainer>
            <ProfilePic>
                <img src={PrPic} />
            </ProfilePic>
            <Bottom>
                <h1>WAZEER AHMED</h1>
                <TypeAnimation
                    sequence={[
                        "FrontEnd", // Types 'One'
                        1000, // Waits 1s
                        "BackEnd", // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        "Design", // Types 'Three' without deleting 'Two'
                        3000,
                        "Mobile app",
                        () => {
                            console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                        },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{
                        fontSize: "18px",
                        display: "inline-block",
                        color: "orange",
                        fontWeight: "700",
                    }}
                />
                <SocialIcons>
                    <ul>
                        <li>
                            <a
                                href="https://dribbble.com/wazeer_ahmd"
                                target="_blank"
                            >
                                <FaDribbble color="white" />
                            </a>
                        </li>
                        <li>
                            <FaTwitter color="white" />
                        </li>
                        <li>
                            <a
                                href="https://github.com/wazeer1"
                                target="_blank"
                            >
                                <FaGithub color="white" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://stackoverflow.com/users/21779243/wazeer-ahmed"
                                target="_blank"
                            >
                                <ImStackoverflow color="white" />
                            </a>
                        </li>
                    </ul>
                </SocialIcons>
            </Bottom>
            <ButtonSect>
                <Button>
                    <a href={Resume} download="wazeer_ahmed" target="_blank">
                        Download CV
                    </a>
                </Button>
                <Button
                    className="contact"
                    onClick={() => navigate("/contact")}
                >
                    Contact Me
                </Button>
            </ButtonSect>
        </Cover>
    );
};

export default CardAbout;
const Cover = styled.div`
    width: 40%;
    height: 600px;
    background-color: var(--secondary-color);
    border-radius: 7px;
    box-shadow: 3px 0px 14px #00000069;
    position: relative;
    z-index: 2;
    @media screen and (max-width:640px){
        width:80%;
    }
`;
const ImageContainer = styled.div`
    background: url(${({ bg }) => bg});
    background-size: cover;
    width: 100%;
    height: 330px;
    clip-path: polygon(100% 63%, 49% 100%, 0 65%, 0 0, 100% 0);
    position: relative;
`;
const ProfilePic = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid var(--primary-color);
    overflow: hidden;
    top: 40%;
    left: 35%;
    img {
        width: 100%;
    }
`;
const Bottom = styled.div`
    padding-top: 70px;
    text-align: center;
    h1 {
        text-align: center;
        color: #fff;
        font-weight: 500;
    }
`;
const SocialIcons = styled.div`
    margin-top: 20px;
    ul {
        display: flex;
        justify-content: center;
        gap: 8px;
    }
`;
const ButtonSect = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    display: flex;
    border-top: 0.6px solid #eee;
    &::after {
    }
`;
const Button = styled.div`
    width: 50%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    position: relative;
    cursor: pointer;
    a {
        text-decoration: none;
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &.contact {
        border-left: 0.6px solid #eee;
    }
`;
