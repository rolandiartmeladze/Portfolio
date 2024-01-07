import React from "react";
import styled from 'styled-components';
import { useState, useEffect } from "react";

import Cvphoto from '../img/cv_img.png';

export default function Photo(){

    useEffect(()=>{
        let photo = document.getElementById('photo'); 
        let photoconteiner = document.getElementById('photoconteiner'); 
        
        setTimeout(() => {
            if (photo && photoconteiner) {
                photo.style.transform = 'scale(1)';
                photoconteiner.style.height = 'auto';
            }  
                   
      
        }, 1000);
}, [])

  
    return (
      <>
<div id="photoconteiner"  style={{transition: '1s ease-in-out' ,marginTop: '15px', height: '0'}}>
    <img id="photo" style={{ transition: '1s ease-in-out',  transform: 'scale(0)', width: '100px', borderRadius: '50%', boxShadow: '0 -2px 1.5px 0.2px white', padding: '2px'}} src={Cvphoto} alt="CV Photo" />
    </div>    
       </>
    );
};