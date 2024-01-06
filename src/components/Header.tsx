import React from "react";
import styled from 'styled-components';
import { useState, useEffect } from "react";
import findIcon from '../icon/find.png';
import findClose from '../icon/close.png';
import menu from '../icon/menu.png';
import menuClose from '../icon/menu-close.png';

const HeadDiv = styled.div`
        position: absolute;
        justify-content: center;
        cursor: pointer;
        display: flex;
        align-items: center;
    `;
    const HeaderItem = styled.div`
            box-shadow: 0px 2px 3px 0px rgb(255, 255, 255, 0.3);
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-top: -60px;
            transition: 0.7s ease;
        `;
        const FindInput = styled.input`
                height: 30px;
                width: 120px;
                border-radius: 8px;
                outline: none;
            `;

export default function Header(){

    const [clickFinde, setClickFinde] = useState(false);
    const FindClick =()=>{ clickFinde?setClickFinde(false):setClickFinde(true) }

        const [clickMenu, setClickMenu] = useState(false);
        const MenuClick =()=>{ clickMenu?setClickMenu(false):setClickMenu(true) }

    useEffect(()=>{
        let header = document.getElementById('header');  
            setTimeout(() => {
                if (header) {
                    header.style.marginTop = '0px';
                }        
            }, 1000);
    }, [])

  
    return (
      <>
        <HeaderItem id="header">
          <HeadDiv style={{left: "5px"}}>
            {clickFinde ? (
              <>
                <FindInput 
                  type="text"
                />
                <img onClick={FindClick}
                  style={{ width: "25px", marginLeft: '4px' }}
                  src={findClose}
                  alt="findIcon" />
              </>
            ) : (
              <img onClick={FindClick}
                style={{ width: "30px" }}
                src={findIcon}
                alt="findClosIcon" />
            )}
          </HeadDiv>
          <h1
            style={{
              padding: "5px",
              margin: "0",
              color: "white",
              fontWeight: "bolder",
            }}
          >
            You are welcome
          </h1>

          <HeadDiv style={{right: "15px"}}>

            {clickMenu ? (
              <img onClick={MenuClick}
                style={{ width: "25px" }}
                src={menuClose}
                alt="menuIcon" />
            ) : (
              <img onClick={MenuClick}
                style={{ width: "30px" }}
                src={menu}
                alt="menuClosIcon" />
            )}

          </HeadDiv>
        </HeaderItem>
      </>
    );
};