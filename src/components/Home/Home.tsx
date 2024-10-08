import React, { useEffect, useState, useRef } from "react";
import "./Home.css";

import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaGithub,
  FaGitAlt,
  FaWordpress,
  FaCloudDownloadAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiHeroku,
  SiVercel,
  SiAdobephotoshop,
} from "react-icons/si";
import { BiSolidShow } from "react-icons/bi";
import { TbJson } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
interface Props {
  setAnimation: Function;
  animation: boolean;
}

const YouName = () => {
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const title = "Roland Artmeladze";

  useEffect(() => {
    const element = nameRef.current;
    if (element) {
      setTimeout(() => {
        element.style.transform = "scale(1)";
      }, 800);
    }
  }, []);

  return <h1 ref={nameRef}>{title}</h1>;
};

const YouRole = () => {
  const roleRef = useRef<HTMLHeadingElement | null>(null);
  const roletitle = "Full Stack Web Developer";

  useEffect(() => {
    const element = roleRef.current;
    if (element) {
      setTimeout(() => {
        element.style.transform = "translate(0px)";
      }, 900);
    }
  }, []);

  return <h2 ref={roleRef}>{roletitle}</h2>;
};

const Summary = () => {
  useEffect(() => {
    const Pelements = document.getElementsByTagName("p");
    const timer = setTimeout(() => {
      Pelements[0].style.transform = "scale(1)";
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <p>
      I am a dedicated full-stack web developer with strong expertise in both frontend and backend development. 
      My frontend skills include <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React.js</b>, 
      with a focus on scalable, high-quality code using <b>TypeScript</b>. 
      On the backend, I have successfully built reliable server-side applications with 
      <b>Node.js</b>, <b>Express</b>, <b>Nest.js</b>, and <b>Python</b>. 
      I manage databases using <b>MongoDB</b>, <b>Mongoose</b>, and <b>Django</b> 
      to ensure seamless data integration. Passionate about pushing boundaries and 
      embracing emerging technologies, I thrive in collaborative environments and 
      enjoy tackling challenges to deliver impactful results. My goal is to 
      contribute to innovative projects that drive growth and success.
      
      {/* As a passionate beginner <b>full-stack web developer</b>, I am driven by the excitement of creating meaningful 
            solutions from the ground up and addressing real-world challenges head-on. My expertise lies 
            predominantly in frontend development, where I leverage <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React</b> to 
            transform user visions into engaging, responsive, and visually appealing web applications. 
            I recently incorporated TypeScript into my toolkit, which has significantly enhanced 
            my code quality and scalability, allowing me to build more robust and maintainable applications. 
            <br/>

            On the backend, I've honed my skills in developing efficient and reliable server-side solutions 
            using <b>Node.js</b>, <b>Express</b> and <b>PHP (enter levet)</b>. My experience includes designing and implementing RESTful APIs, 
            handling complex business logic, and ensuring seamless communication between the client 
            and server. Furthermore, I proficiently manage databases using <b>MongoDB</b> and <b>Mongoose Atlas</b>, 
            ensuring smooth data integration and consistency across applications.
            <br/>

            I thrive on pushing boundaries and continuously exploring emerging technologies to stay at the 
            forefront of web development trends. My goal is to deliver effective and innovative results in 
            collaborative environments, where I can contribute my technical skills and creative problem-solving 
            abilities to build exceptional products. Whether working independently or as part of a team, I am 
            committed to continuous learning and growth, always seeking new challenges that will allow me to 
            expand my knowledge and make a meaningful impact. */}
    </p>
  );
};


const icons = [
  <FaCss3Alt />,
  <FaHtml5 />,
  <SiJavascript />,
  <FaReact />,
  <FaNode />,
  <SiExpress />,
  <FaPython />,
  <DiDjango />,
  <FaPhp />,
  <SiMongodb />,
  <FaGithub />,
  <FaGitAlt />,
  <SiHeroku />,
  <SiVercel />,
  <FaWordpress />,
  <SiAdobephotoshop />,
  <TbJson />
];

const AnimeIcons: React.FC<Props> = ({ setAnimation, animation }) => {
  const iconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const item = document.getElementById("icons-line");
    setTimeout(() => {
      if (item) {
        item.style.opacity = "1";
      }
    }, 2300);

    const iconsline = iconsRef.current;
    if (animation) {
      iconsline.forEach((icon, index) => {
        setTimeout(() => {
          icon.style.transform = "scale(1.8)";
          setTimeout(() => {
            icon.style.transform = "scale(1)";
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
      {icons.map((Icon, index) => (
        <div key={index} ref={addIconRef}>
          {Icon}
        </div>
      ))}
    </div>
  );
};



const Home = () => {
  const [animation, setAnimation] = useState<boolean>(true);

  const IconsProps = { setAnimation, animation };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  const viewUrl =
    "https://drive.google.com/file/d/1rnyN7p_bCZ-ZUHqmu2w5MVWxvB-mfnGu/view?usp=sharing";
  const downloadUrl =
    "https://drive.google.com/uc?export=download&id=1rnyN7p_bCZ-ZUHqmu2w5MVWxvB-mfnGu";

  return (
    <section className="Home-container">
      <div className="title-cont">
        {YouName()}
        {YouRole()}
      </div>

      <Summary />

      <AnimeIcons {...IconsProps} />

      <div className="end-line">
        <samp
          onClick={() => {
            handleClick(viewUrl);
          }}
        >
          <BiSolidShow /> View Resume
        </samp>
        <samp
          onClick={() => {
            handleClick(downloadUrl);
          }}
        >
          <FaCloudDownloadAlt /> Download
        </samp>
      </div>
    </section>
  );
};

export default Home;
