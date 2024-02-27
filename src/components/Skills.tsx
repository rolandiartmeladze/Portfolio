
import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';

import html from '../icon/htmli.png';
import js from '../icon/js.png';
import react from '../icon/reactjs.png';
import css from '../icon/css.png';
import php from '../icon/php.png';
import tsx from '../icon/typescript.png';


interface LiProps {
  skill: 'html' | 'javascript' | 'react' | 'php' | 'css' | 'typescript'; 
}

// const fadeIn = keyframes`
//   from {
//     width: 0%;
//   }
//   to {
//     width: 90%;
//   }
// `;



const Li = styled.li<LiProps>`
    font-size: 25px;    
    font-weight: 700;    
    display: flex;       
    align-items: center;
    position: relative;
    background-color: rgba(255, 110, 0, 0.1); 
    margin: 8px;
    backdrop-filter: blur(5px); 
    z-index: 2;

    &::after {
      content: '';
      position: absolute; 
      width: ${props => {
        switch(props.skill) {
          case 'html':
            return '90%';
          case 'javascript':
            return '70%';
          case 'react':
            return '65%';
          case 'php':
            return '20%';
          case 'css':
            return '80%';
          case 'typescript':
            return '60%';
          default:
            return '50%'; // Default width
        }
      }};      height: 70%;
      background: linear-gradient(to top, rgba(100, 158, 0, 0.6),rgba(0, 128, 0, 0.3),rgba(0, 128, 0, 0.0)); 
      bottom: 0;     
      left: 0;
      opacity: 1; 
      z-index: 1;
      border-top-right-radius: 300px;
      border-bottom: 3px solid yellow;
    }
    
    &::before {
      content: '';
      position: absolute; 
      width: 6px;
      height: 100%;
      background-color: red; 
      bottom: 0;     
      left: -10px;
      opacity: 1; 
      z-index: 1;
    }
    
    samp {             
      margin: 3px;   
      z-index: 2;
    }
    
    span {
      z-index: 2;
      color: white;
    }
    
    img {
      z-index: 2;
      max-width: 50px;
    }
`;
    

const Skills: React.FC = () => {

  return (
<>
<section style={{
  minHeight: '200px',
  width: '96%',
  marginBottom:'25px'
}}>
  <h1 
   style={{
    color: 'white',
    fontSize: '35px',  
    fontWeight: '900'
  }}
  >
    skills Section
    </h1>

<ul style={{
 listStyle:'none'
}}>
<Li skill="html">
  <samp><img src={html} alt="skill icon" /></samp> <span>Html</span> 
</Li>
<Li skill="css">
  <samp><img src={css} alt="skill icon" /></samp> <span>CSS3</span>
</Li>

<Li skill="javascript">
  <samp><img src={js} alt="skill icon" /></samp> <span>JavaScript</span>
</Li>
<Li skill="react">
  <samp><img src={react} alt="skill icon" /></samp> <span>React.js</span>
</Li>
<Li skill="typescript">
  <samp><img src={tsx} alt="skill icon" /></samp> <span>Typescript</span>
</Li>

<Li skill="php">
  <samp><img src={php} alt="skill icon" /></samp> <span>PHP</span>
</Li>

</ul>
</section>

    </>
  );
};

export default Skills;
