import React from "react";
import './Header.css';

import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Header = () => {

    return (

        <nav>
            <ul>
            <a href="mailto: rartmeladze@gmail.com"> <MdEmail /><li>Rartmeladz@gmail.com</li></a>
            <a href="tel: +995595035668"> <FaPhoneSquareAlt /><li>(+995) 595 03-56-68</li> </a>
            <a href="https://www.linkedin.com/in/roland-a-96240487"> <FaLinkedin /><li>Roland Artmeladze</li></a>
            </ul>
            
        </nav>
    );
};

export default Header;