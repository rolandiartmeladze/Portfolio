import React from "react";
import './Header.css';

import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Header = () => {

    const mobile = window.innerWidth <= 768;
    
    return (

        <nav>
            <ul>
            <a href="mailto: rartmeladze@gmail.com"> <MdEmail /><li>{mobile? 'Write Email' : 'Rartmeladz@gmail.com'}</li></a>
            <a href="tel: +995595035668"> <FaPhoneSquareAlt /><li>{mobile? 'Call Now' : '(+995) 595 03-56-68'}</li> </a>
            <a href="https://www.linkedin.com/in/roland-a-96240487"> <FaLinkedin /><li>{mobile? 'Show Profile' : 'Roland Artmeladze'}</li></a>
            </ul>
            
        </nav>
    );
};

export default Header;