import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100%;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #202020;
  color: #FFF;

  svg {
    width: 6vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #FFF;
        fill:none;
        fill-rule:evenodd;
        stroke-width:18.05195999;
        stroke-linecap:butt;
       
       
    
       
      }
    }
  }
`;
const Text = styled(motion.span)`
  font-size:2em ;
  color: #FFFFF;
  padding-top: 0.5rem;
`;
const textVariants = {
  hidden: {
    opocity: 0,
  },
  visible: {
    opocity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeInOut",
    }
  },
};
const pathVariants = {
  hidden: {
    opocity: 0,
    pathLength: 0,
  },
  visible: {
    opocity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const Loader = () => {
  return (
    <Container>
        {/* <img  src={image}/> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="200"
        height="200"
        id="svg8978"
      >
         <defs
     id="defs8980" />
        {/* <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g> */}
        <g>

        </g>
        <g>
            <motion.path
            variants={pathVariants}
            initial="hidden"
            animate='visible'
            
            d="M 6.3895625,6.4195626 C 93.580437,93.610437 93.580437,93.610437 93.580437,93.610437,M 6.3894001,93.6106 C 93.830213,6.4194003 93.830213,6.4194003 93.830213,6.4194003"/>
  
          {/* <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" /> */}
        </g>
      </svg>
      <Text variants={textVariants}
        initial="hidden"
        animate='visible'>
            Media
        </Text>
    </Container>
  );
};

export default Loader;
