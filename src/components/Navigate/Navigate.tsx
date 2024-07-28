import React, {useEffect, useState} from "react";
import './Navigate.css';

import { FaHome } from 'react-icons/fa';
import { GrProjects } from "react-icons/gr";
import { MdMenu, MdWork, MdSettings, MdCastForEducation, MdContacts } from "react-icons/md";
import { CgMenuMotion } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navigate = () =>{

    const element = document.getElementsByClassName('aside-navigate-item') as HTMLCollectionOf<HTMLElement>;
     

    const [ismobil, setIsMobil] = useState(false);
    const [navAct, setNavAct] = useState(false);

    useEffect(() => {
      const checkIsMobile = () => {
        const isMobile = window.innerWidth <= 768;
        setIsMobil(isMobile);
      };
    
      checkIsMobile();
    
      window.addEventListener('resize', checkIsMobile);
    
      return () => {
        window.removeEventListener('resize', checkIsMobile);
      };
    }, []);
  

    const NavigationAnimate =()=>{
        if (element) {
            setTimeout(() => {
                
                Array.from(element).forEach((el, index) => {
                  setTimeout(() => {
                    el.style.transform = 'scale(1)';
                  }, index * 300);
                });
                 
             }, 2000);
        }
        
    }

useEffect(()=>{
    NavigationAnimate();
},[])


const MenuActive = ()=>{
    setNavAct(!navAct);
}

const navItems = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/Projects', label: 'Projects', icon: <GrProjects /> },
    { to: '/Experiance', label: 'Experiance', icon: <MdWork /> },
    { to: '/Skills', label: 'Skills', icon: <MdSettings /> },
    { to: '/Education', label: 'Education', icon: <MdCastForEducation /> },
    { to: '/Contact', label: 'Contact', icon: <MdContacts /> },
  ];

    return(
        <nav className={`aside-navigate ${navAct ? 'active' : ''}`}>
      <div onClick={MenuActive} className={`Meniu-btn ${navAct ? 'active' : ''}`}>
        {ismobil && !navAct ? <MdMenu /> : <CgMenuMotion />}
      </div>
      <ul className={`aside-navigate-cont ${navAct ? 'active' : ''}`}>
        {navItems.map((item, index) => (
          <Link key={index} to={item.to}>
            <li onClick={MenuActive} className={`aside-navigate-item ${navAct ? 'active' : ''}`}>
              <label>{item.label}</label>
              <div>{item.icon}</div>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
    )
}

export default Navigate;