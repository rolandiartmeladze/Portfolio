
import React, { useState } from "react";
import styled from 'styled-components';

import html from '../icon/html.png';
import js from '../icon/javascriptLogo.png';
import react from '../icon/ReactLogo.png';





const Li = styled.li`
    font-size: 25px;    
    font-weight: 700;    
    display: flex;       
    align-items: center; 

    a {
      color: white;
      text-decoration: none;
    }

    samp {             
      margin: 3px;       
    }
    
    img {
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
    color: 'red',
    fontSize: '35px',  
    fontWeight: '900'
  }}
  >
    skills Section
    </h1>

<ul style={{
 listStyle:'none'
}}>
<Li>
    <samp><img src={html} alt="contact icon"  /> </samp> Html 
  </Li>
  <Li>
  <samp><img src={js} alt="contact icon"  /> </samp> JavaScrypt
  </Li>
  <Li>
  <samp><img src={react} alt="contact icon"  /> </samp>  React.js
  </Li>
</ul>
</section>

    </>
  );
};

export default Skills;
