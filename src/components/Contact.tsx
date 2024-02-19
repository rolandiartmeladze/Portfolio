
import React, { useState } from "react";
import styled from 'styled-components';

import gmile from '../icon/gmail.png';
import phone from '../icon/phone.png';
import address from '../icon/address.png';




const Li = styled.li`
    font-size: 25px;    
    font-weight: 700;    
    display: flex;       
    align-items: center; 

    & a {
      color: white;
      text-decoration: none;

    }
    & samp {             
      margin: 3px;       
    }`;

const Contact: React.FC = () => {

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
    Contact Section
    </h1>

<ul style={{
 listStyle:'none'
}}>
<Li>
    <samp><img src={gmile} alt="contact icon"  /> </samp> <a href="mailto:Rartmeladze@gmail.com">Rartmeladze@gmail.com</a>
  </Li>
  <Li>
  <samp><img src={phone} alt="contact icon"  /> </samp> <a href="tel:+995595035668">(+995) 595 03-56-68</a>
  </Li>
  <Li>
  <samp><img src={address} alt="contact icon"  /> </samp> <a href="#Location"> georgi, kvemo-kartli, tsalka, tbeti, st. III, N52 </a>
  </Li>
</ul>
</section>

    </>
  );
};

export default Contact;
