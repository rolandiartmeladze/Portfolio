import React, {useEffect, useState}from "react";
import './Home.css';

import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaPhp, FaGithub, FaGitAlt, FaWordpress  } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiHeroku, SiVercel, SiAdobephotoshop } from "react-icons/si";


const YouName = () => {
    const title = 'Roland Artmeladze';
    const [name, setName] = useState('');
        useEffect(() => {
            title.split('').forEach((item, index) => {
                setTimeout(() => {
                    setName(prev => prev + item);
                }, index * 70);
            });
        }, [title]);

    return(<h1>{name}</h1>);
};


const YouRole = () => {
    const roletitle = 'Full Stake Web Developer';
    const [role, setRole] = useState('');

               useEffect(() => {
                    setTimeout(() => {
                        roletitle.split('').forEach((item, index) => {
                            setTimeout(() => {
                                setRole(prev => prev + item);
                            }, index * 50);

                        });
                    }, 1000);



                }, [roletitle]);

    return(<h2>{role}</h2>);
};

const AnimeIcons = () =>{
    const iconsline = document.querySelectorAll('#icons-line svg');
    console.log(iconsline);
    setTimeout(()=>{
        iconsline.forEach((item, index) => {
        let element:any = item;
        setTimeout(() => {
           element.style.translate = '-5';  
              }, index * 50);
    }, 4000)
    
    })

    return(
        <div id="icons-line">
       
       <samp><FaCss3Alt /></samp>
       <FaHtml5 />
       <SiJavascript />
       <FaReact />
       <FaNode />
       <SiExpress />
       <FaPhp />

    <SiMongodb />
    <FaGithub />
    <FaGitAlt />
    <SiHeroku />
    <SiVercel />
    <FaWordpress />
    <SiAdobephotoshop />
        </div>

    );
}

const Home = () => {



return(
        <section>
            <div style={{display: 'flex',
                flexDirection: 'column'}}>
                {YouName()}
                {YouRole()}
            </div>

            <p>
            As a beginner full-stack web developer, I'm driven by the opportunity to create meaningful solutions from 
            scratch or tackle practical challenges head-on. My expertise lies in frontend development, where I use <b>HTML</b>, 
            <b>CSS</b>, <b>JavaScript</b>, and <b>React</b> to bring user visions to life with precision and style. Recently, 
            I've embraced <b>TypeScript</b> for enhanced code quality and scalability. On the backend, I've successfully 
            developed <b>Node.js</b> <b>Express</b> applications, building reliable server-side solutions. Additionally, I proficiently 
            manage databases using <b>MongoDB</b> and <b>Mongoose Atlas</b> for seamless data integration. I thrive on 
            pushing boundaries and exploring emerging technologies to deliver effective results in collaborative environments.
            </p>
<div className="anime-con">
{AnimeIcons()}
</div>

        </section>
    );

};

export default Home;