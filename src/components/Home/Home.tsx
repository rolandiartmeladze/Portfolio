import React, {useEffect, useState, useRef}from "react";
import './Home.css';

import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaPhp, FaGithub, FaGitAlt, FaWordpress  } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiHeroku, SiVercel, SiAdobephotoshop } from "react-icons/si";

interface Props{
    setAnimation: Function;
    animation:boolean;
}

const YouName = () => {
    const nameRef = useRef<HTMLHeadingElement | null>(null);
    const title = 'Roland Artmeladze';

    useEffect(() => {    
        const element  = nameRef.current;
            if(element){
                setTimeout(() => {
                    element.style.transform = 'scale(1)'
                }, 800);
            }
    }, []);

    return(<h1  ref={nameRef}>{title}</h1>);
};


const YouRole = () => {
    const roleRef = useRef<HTMLHeadingElement | null>(null);
    const roletitle = 'Full Stack Web Developer';
  
    useEffect(() => {
      const element = roleRef.current;
      if (element) {
        setTimeout(() => {
          element.style.transform = 'translate(0px)';
        }, 900);
      }
    }, []);
  
    return <h2 ref={roleRef}>{roletitle}</h2>};


const Summary =()=>{
    useEffect(() => {
        const Pelements = document.getElementsByTagName('p');
            const timer = setTimeout(() => {
                Pelements[0].style.transform = 'scale(1)';
            }, 1500);
    
        return () => clearTimeout(timer);
      }, []);

    return(
        <p>
            As a beginner full-stack web developer, I'm driven by the opportunity to create meaningful solutions from 
            scratch or tackle practical challenges head-on. My expertise lies in frontend development, where I use <b>HTML</b>, 
            <b>CSS</b>, <b>JavaScript</b>, and <b>React</b> to bring user visions to life with precision and style. Recently, 
            I've embraced <b>TypeScript</b> for enhanced code quality and scalability. On the backend, I've successfully 
            developed <b>Node.js</b> <b>Express</b> applications, building reliable server-side solutions. Additionally, I proficiently 
            manage databases using <b>MongoDB</b> and <b>Mongoose Atlas</b> for seamless data integration. I thrive on 
            pushing boundaries and exploring emerging technologies to deliver effective results in collaborative environments.
        </p>
    );

}
  
  const AnimeIcons: React.FC<Props> = ({ setAnimation, animation }) => {
    const iconsRef = useRef<HTMLDivElement[]>([]);

   useEffect(() => {
    const item = document.getElementById('icons-line');
    setTimeout(() => {
        if(item){
            item.style.opacity = '1';       
        }
    }, 2300);

    const iconsline = iconsRef.current;
    if (animation) {
      iconsline.forEach((item, index) => {
        setTimeout(() => {
          item.style.transform = 'scale(1.8)';
          setTimeout(() => {
            item.style.transform = 'scale(1)';
          }, 800);
        }, index * 700);
      });
      setTimeout(() => {
        setAnimation(false);

      }, iconsline.length * 800 + 700);
    }
  }, [animation, setAnimation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(true);
    }, 25000);

    return () => clearInterval(interval);
  }, [setAnimation]);

  const addIconRef = (el: HTMLDivElement | null) => {
    if (el) {
      iconsRef.current.push(el);
    }
  };

  return (
<div id="icons-line" className="anime-con">
      <div ref={addIconRef}><FaCss3Alt /></div>
      <div ref={addIconRef}><FaHtml5 /></div>
      <div ref={addIconRef}><SiJavascript /></div>
      <div ref={addIconRef}><FaReact /></div>
      <div ref={addIconRef}><FaNode /></div>
      <div ref={addIconRef}><SiExpress /></div>
      <div ref={addIconRef}><FaPhp /></div>
      <div ref={addIconRef}><SiMongodb /></div>
      <div ref={addIconRef}><FaGithub /></div>
      <div ref={addIconRef}><FaGitAlt /></div>
      <div ref={addIconRef}><SiHeroku /></div>
      <div ref={addIconRef}><SiVercel /></div>
      <div ref={addIconRef}><FaWordpress /></div>
      <div ref={addIconRef}><SiAdobephotoshop /></div>
    </div>
  );
};



const Home = () => {

    const [animation, setAnimation] = useState<boolean>(true);

    const IconsProps = {setAnimation, animation}

return(
        <section>
            <div className="title-cont">
                {YouName()}
                {YouRole()}
            </div>

            <Summary />

            <AnimeIcons {... IconsProps} />

        </section>
    );

};

export default Home;