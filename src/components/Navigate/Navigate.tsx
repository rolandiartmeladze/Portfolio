import React, {useEffect} from "react";
import './Navigate.css';

import { FaHome } from 'react-icons/fa';
import { GrProjects } from "react-icons/gr";
import { MdWork, MdSettings, MdCastForEducation, MdContacts } from "react-icons/md";
import { Link } from "react-router-dom";

const Navigate = () =>{

    const element = document.getElementsByClassName('aside-navigate-item') as HTMLCollectionOf<HTMLElement>;
     

useEffect(()=>{
    if (element) {
    setTimeout(() => {
        
        Array.from(element).forEach((el, index) => {
          setTimeout(() => {
            el.style.transform = 'scale(1)';
          }, index * 300);
        });
         
     }, 2000);
}
},[])

    return(
        <nav className="aside-navigate">
            <ul className="aside-navigate-cont">
            <Link to={'/'}> 
                    <li className="aside-navigate-item">
                        <label>Home</label>
                        <div><FaHome /></div>
                    </li>
                </Link>
            <Link to={'Projects'}>
                    <li className="aside-navigate-item">
                        <label>Projects</label>
                        <div><GrProjects/> </div>
                    </li>
                </Link> 
                <Link to={'Experiance'}>
                    <li className="aside-navigate-item">
                        <label>Experiance</label>
                        <div><MdWork /></div>
                    </li>  
                </Link>
                <Link to={'Skills'}>
                    <li className="aside-navigate-item">
                        <label>SkillS</label>
                        <div><MdSettings /></div>
                    </li>   
                </Link>
                <Link to={'Education'}>
                    <li className="aside-navigate-item">
                        <label>Education</label>
                        <div><MdCastForEducation /></div>
                    </li>
                </Link> 
                <Link to={'Contact'}>      
                    <li className="aside-navigate-item">
                        <label>Contact</label>
                        <div><MdContacts /></div>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigate;