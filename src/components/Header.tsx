import React from "react";
import { useState, useEffect } from "react";
import findIcon from '../icon/find.png';
import findClose from '../icon/close.png';
import menu from '../icon/menu.png';
import menuClose from '../icon/menu-close.png';
import { Console } from "console";

export default function Header(){

    const [clickFinde, setClickFinde] = useState(false);
    const [clickMenu, setClickMenu] = useState(false);

    const FindClick =()=>{
        clickFinde?setClickFinde(false):setClickFinde(true)
    }
    const MenuClick =()=>{
        clickMenu?setClickMenu(false):setClickMenu(true)
    }



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
        <div 
        id="header"
          style={{
            boxShadow: "0px 2px 3px 0px rgb(255, 255, 255, 0.3)",
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginTop:'-60px',
            transition: '0.7s ease'
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "5px",
              justifyContent: "center",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            {clickFinde ? (
              <>
                <input
                  style={{
                    height: "30px",
                    width: "120px",
                    borderRadius: "8px",
                    outline: "none",
                  }}
                  type="text"
                />
                <img
                  onClick={FindClick}
                  style={{ width: "25px", marginLeft: '4px' }}
                  src={findClose}
                  alt="findIcon"
                />
              </>
            ) : (
              <img
                onClick={FindClick}
                style={{ width: "30px" }}
                src={findIcon}
                alt="findClosIcon"
              />
            )}
          </div>
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

          <div
            style={{
              position: "absolute",
              right: "15px",
              justifyContent: "center",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            {clickMenu ? (
              <img
                onClick={MenuClick}
                style={{ width: "25px" }}
                src={menuClose}
                alt="menuIcon"
              />
            ) : (
              <img
                onClick={MenuClick}
                style={{ width: "30px" }}
                src={menu}
                alt="menuClosIcon"
              />
            )}
          </div>
        </div>
      </>
    );
};