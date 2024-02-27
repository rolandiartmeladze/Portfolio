
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

    const ContactForm = styled.form`
    & input {
      margin: 5px;
      padding: 10px;
    }
    & textarea{
      margin: 5px;
      padding: 10px;
    }
  `;
  
  const Contact: React.FC  = () => {


  return (
<>
<section style={{
  minHeight: '200px',
  width: '96%',
  marginBottom:'25px',
  flexDirection: 'column',
    flexWrap: 'wrap'
}}>
  <h1 
   style={{
    color: 'yellow',
    fontSize: '35px',  
    fontWeight: '900'
  }}
  >
    Contact Section
    </h1>
<div style={{display: 'flex'}}>

<ul style={{
 listStyle:'none',
 width: '55%'
}}>
    <article style={{display: 'flex', width:'85%' , flexDirection: 'column'}}>

<Li>
    <samp><img src={gmile} alt="contact icon"  /> </samp> <a href="mailto:Rartmeladze@gmail.com">Rartmeladze@gmail.com</a>
  </Li>
  <Li>
  <samp><img src={phone} alt="contact icon"  /> </samp> <a href="tel:+995595035668">(+995) 595 03-56-68</a>
  </Li>
  <Li>
  <samp><img src={address} alt="contact icon"  /> </samp> <a href="#Location"> georgi, kvemo-kartli, tsalka, tbeti, st. III, N8 </a>
  </Li>
  </article>
  <article style={{display: 'flex' , width:'100%'}}>
        <iframe 
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23868.606053319374!2d44.03291353476564!3d41.6000598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4043a200e917f18f%3A0xefd4107728766aa5!2zOCDhg5vhg5QtMyDhg6Xhg6Phg6nhg5AsIOGDouGDkeGDlOGDl-GDmCA1MzAw!5e0!3m2!1ska!2sge!4v1709059694925!5m2!1ska!2sge`} 
        width="600" height="150" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </article>
      </ul>
      <ul style={{
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'}}>
      <h1 style={{color: 'white'}}>Contact Me</h1>
        <ContactForm style={{display: 'flex', flexDirection: 'column'}}>

        <input type="text" placeholder="You Name" />
        <input type="emile" placeholder="You Email" />
        <textarea name="message" id="message" cols={40} rows={7}  placeholder="Write Your Message Hear..." ></textarea>
        <button style={{
          margin: '5px', 
          padding: '8px',
          cursor: 'pointer',
          color: 'red'
        }}> Send Message</button>
        </ContactForm>
      </ul>
      </div>

</section>

    </>
  );
};

export default Contact;
