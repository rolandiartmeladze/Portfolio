import React from "react";
import './Navigate.css';

import { FaHome } from 'react-icons/fa';
import { GrProjects } from "react-icons/gr";
import { MdWork, MdSettings, MdCastForEducation, MdContacts } from "react-icons/md";
const Navigate = () =>{

    return(
        <nav className="aside-navigate">
        <ul   className="aside-navigate-cont">
            <li className="aside-navigate-item"><div><FaHome /></div></li>
            <li className="aside-navigate-item"><div><GrProjects/> </div></li>
            <li className="aside-navigate-item"><div><MdWork /></div></li>  
            <li className="aside-navigate-item"><div><MdSettings /></div></li>   
            <li className="aside-navigate-item"><div><MdCastForEducation /></div></li>       
            <li className="aside-navigate-item"><div><MdContacts /></div></li>

        </ul>
        </nav>
    )
}

export default Navigate;