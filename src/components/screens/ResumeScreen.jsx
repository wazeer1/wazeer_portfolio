import React from 'react'
import Container from '../reuse/Container'
import Heading from '../reuse/Heading'
import { motion } from "framer-motion";
import styled from 'styled-components';
import SubHead from '../reuse/SubHead';
import { FaBriefcase,FaSchool,FaPaintBrush } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { GiClassicalKnowledge } from "react-icons/gi";
import WidgetCard from '../reuse/WidgetCard';
import SkillBar from '../reuse/SkillBar';
import PercentageGraph from '../reuse/PercentageGraph';
import BulletPoints from '../reuse/BulletPoints';



const ResumeScreen = () => {
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
        <Heading content1="Resume"/>
        <Cover>
            <Left>
                <SubHead icon={<FaBriefcase size="20px" color="orange"/>} head="EXPERIENCE"/>
                <WidgetCard present={true} date="2021-present" title="Fullstack Developer" company="Steyp pvt ltd" description="Collaborate with creative and development teams on the execution of ideas."/>
            </Left>
            <Right>
                <SubHead icon={<FaSchool size="20px" color="orange"/>} head="EDUCATION"/>
                <WidgetCard date="2018-2021" title="Bachelor of computer Application" company="SES sreekantapuram" description=""/>
                <WidgetCard date="2021-2021" title="MERN stack" company="Udemy" description="learned MERN stack for developing fullstack web development"/>
                <WidgetCard date="2021-2021" title="Fullstack development" company="steyp" description="fullstack development internship on react js and python django "/>
                <WidgetCard present={true} date="2023-present" title="AI and Meshine Learning" company="udemy" description="data engineering meshine learning and AI using python"/>
            </Right>
        </Cover>
        <Heading content1="My" content2="Skills"/>
        <Cover>
            <Left>
                <SubHead icon={<FaPaintBrush size="20px" color="orange"/>} head="DESIGN & EDITING"/>
                <SkillCover>
                    <SkillBar label="FIGMA" percent="70%"/>
                    <SkillBar label="XD" percent="80%"/>
                    <SkillBar label="premiur pro" percent="60%"/>
                    <SkillBar label="After Effects" percent="60%"/>
                    <SkillBar label="Blunder" percent="80%"/>
                </SkillCover>
            </Left>
            <Right>
                <SubHead icon={<BsFlagFill size="20px" color="orange"/>} head="LANGUAGES"/>
                <SkillCover>
                    <SkillBar label="ENGLISH" percent="70%"/> 
                    <SkillBar label="MALAYALAM" percent="90%"/> 
                    <SkillBar label="HINDI" percent="60%"/> 
                    <SkillBar label="Tamil" percent="40%"/> 
                </SkillCover>
            </Right>
        </Cover>
        <Cover>
            <Left>
                <SubHead icon={<BsCodeSlash size="20px" color="orange"/>} head="CODING"/>
                <CodeCover>
                    <PercentageGraph percent={80} label="React js" />
                    <PercentageGraph percent={80} label="HTML" />
                    <PercentageGraph percent={70} label="Java Script" />
                    <PercentageGraph percent={75} label="CSS" />
                    <PercentageGraph percent={70} label="Python" />
                    <PercentageGraph percent={80} label="Django" />
                    <PercentageGraph percent={50} label="Flutter" />
                    <PercentageGraph percent={50} label="Node" />
                </CodeCover>
            </Left>
            <Right>
                <SubHead icon={<GiClassicalKnowledge size="20px" color="orange"/>} head="KNOWLEDGE"/>
                <KnowCover>
                <BulletPoints content="Proficient in React.js, Redux, Node.js, HTML5, CSS/CSS3, JavaScript, JQUERY, Bootstrap5, Flutter, React Native, Python, Django"/>
                <BulletPoints content="Experience in web/REST API, web services (Generic Handler)"/>
                <BulletPoints content="Knowledge of e-commerce platforms such as Woo-Commerce, WordPress, and MySQL"/>
                <BulletPoints content="Familiar with Express JS, MongoDB, Firebase, Photoshop, Illustrator, Adobe XD, Figma, Premier Pro, Blender, Maya"/>
                <BulletPoints content="Strong problem-solving, analytical, and debugging skills"/>
                <BulletPoints content="Excellent communication, teamwork, and time-management skills"/>
                </KnowCover>
            </Right>
        </Cover>
    </Container>
    </motion.div>
  )
}

export default ResumeScreen

const Cover = styled.div`
    padding: 20px;
    display:flex;
`;
const Left = styled.div`
    padding: 0px 15px;
    width: 50%;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        width: 0.6px;
        height: 100%;
        background: linear-gradient(to right, #eee, var(--secondary-color));
        bottom: 0;
        right: 0;
    }
    `;
const Right = styled.div`
    width: 50%;
    padding: 0px 15px;
`;
const SkillCover = styled.div`
    width:100%;
    padding: 20px 0px;
`;
const CodeCover = styled.div`
    padding: 20px 0px;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const KnowCover = styled.div`
    padding:20px 0px;
`;