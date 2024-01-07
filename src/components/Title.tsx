import React from "react";
import styled from 'styled-components';
import { useState, useEffect } from "react";


const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  min-height: 100px;
  margin-top: 0px;
`;

const HeaderText = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 44px;
  color: white;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
  top: -60px;
  position: absolute;
  transition: 1.3s ease-in-out;
`;

const SubHeaderText = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
  color: white;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;
  bottom: -50px;
  position: absolute;
  transition: 1.5s ease-in-out;
`;


export default function Title(){

    // const [clickFinde, setClickFinde] = useState(false);
    // const FindClick =()=>{ clickFinde?setClickFinde(false):setClickFinde(true) }

    //     const [clickMenu, setClickMenu] = useState(false);
    //     const MenuClick =()=>{ clickMenu?setClickMenu(false):setClickMenu(true) }

    useEffect(()=>{
        let name = document.getElementById('name');  
        let roll = document.getElementById('roll');  
        setTimeout(() => {
            if (name) {
                name.style.top = '0px';
            }  
            if (roll) {
                roll.style.bottom = '0px';
            }        
      
        }, 1500);
}, [])

  
    return (
      <>
    <HeaderContainer>
        <HeaderText id="name">Roland Artmeladze</HeaderText>
        <SubHeaderText id="roll">Front End Developer</SubHeaderText>
      </HeaderContainer>      </>
    );
};