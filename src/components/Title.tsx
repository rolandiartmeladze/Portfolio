import React from "react";
import styled from 'styled-components';
import {useEffect } from "react";

interface title {
ismobil: boolean;
}
const HeaderContainer = styled.div<title>`
      width: 100%;
      display: flex;
      justify-content: center;
      overflow: hidden;
      position: relative;
      min-height: ${({ ismobil }) => (ismobil ? '70px' : '100px')};
      margin-top: 0px;
`;

const HeaderText = styled.h1<title>`
      text-transform: uppercase;
      color: white;
      padding: 0;
      margin: 0;
      width: 100%;
      text-align: center;
      top: -60px;
      position: absolute;
      transition: 1.3s ease-in-out;
      opacity: 0;
      font-weight: ${({ ismobil }) => (ismobil ? 'bolder' : '900')};
      font-size: ${({ ismobil }) => (ismobil ? '30px' : '44px')};
`;

const SubHeaderText = styled.h2<title>`
      text-transform: uppercase;
      color: white;
      padding: 0;
      margin: 0;
      width: 100%;
      text-align: center;
      bottom: -50px;
      position: absolute;
      transition: 1.5s ease-in-out;
      opacity: 0;
      font-weight: ${({ ismobil }) => (ismobil ? 'bolder' : '700')};
      font-size: ${({ ismobil }) => (ismobil ? '20px' : '30px')};
`;


const Title: React.FC<title> = ({ismobil}) => {



    useEffect(()=>{
        let name = document.getElementById('name');  
        let roll = document.getElementById('roll');  
            setTimeout(() => {
                if (name) {
                  name.style.opacity = '1';
                  name.style.top = '0px';
                }  
                if (roll) {
                    roll.style.opacity = '1';
                    roll.style.bottom = '0px';
                }        
          
            }, 1500);
}, [])

  
    return (
      <>
    <HeaderContainer  ismobil={ismobil}>
        <HeaderText ismobil={ismobil} id="name" >Roland Artmeladze</HeaderText>
        <SubHeaderText ismobil={ismobil} id="roll">Front End Developer</SubHeaderText>
      </HeaderContainer>      
      </>
    );
};
export default Title;