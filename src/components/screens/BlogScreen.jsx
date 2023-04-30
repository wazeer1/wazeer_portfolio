import React from 'react'
import Container from '../reuse/Container'
import Heading from '../reuse/Heading'
import { motion } from "framer-motion";
import styled from 'styled-components';

const BlogScreen = () => {
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
        <Heading content1="BLOG"/>
        <Cover><h3>No Blog Post Now!!!</h3></Cover>
    </Container>
    </motion.div>
  )
}

export default BlogScreen

const Cover = styled.div`
    padding: 20px;
    h3{
        color:#666;
    }
`;