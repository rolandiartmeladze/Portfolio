import React, { useEffect , useState} from "react";
import styled from 'styled-components';
import reactlogo from '../icon/ReactLogo.png';
import javascriptlogo from '../icon/javascriptLogo.png';
import htmllogo from '../icon/html.png';
import { title } from "process";

interface LogoWrapperProps {
  id: string;
  src: string;
  alt: string;
  isRounded?: boolean;
  top: string;
//   title: string;
}

const Samp = styled.samp`
  font-weight: bolder;
  font-size: 25px;
  color: yellow;
`;

const Aboutme = styled.div`
  width: 95%;
  float: right;
  min-height: 60vh;
  margin-top: 15px;
  margin-left: 200%;
  transition: 1.8s ease-in;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 100px;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(to right, rgba(0, 0, 255, 0.4), rgba(255, 255, 0, 0.4), rgba(255, 0, 0, 0.4));
    z-index: 1;
    border-top: 40px solid black;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 10%;
  transition: 2s ease-in;
  left: 115%;
`;

const LogoImage = styled.img<{ isRounded?: boolean }>`
  width: 80%;
  border-radius: ${({ isRounded }) => (isRounded ? '50%' : '0')};
`;

const LogoWrapper: React.FC<LogoWrapperProps> = ({ id, src, alt, isRounded, top }) => (
  <LogoContainer id={id} style={{ top }}>
    <LogoImage src={src} alt={alt} isRounded={isRounded} />
  </LogoContainer>
);

const AboutMe: React.FC = () => {
    
    const [title, setTitle] = useState("");

    useEffect(() => {
      const AboutMeTitle = ["A", "b", "o", "u", "t", " ", "M", "e"];
    
    
    
    const items = ['react', 'javascript', 'html'];
    let aboutme = document.getElementById('aboutme');  
    let summery = document.getElementById('summery');  
    setTimeout(() => {

        if (aboutme) { aboutme.style.marginLeft = '5%'; }

        
            setTimeout(() => {
                if (summery) { summery.style.opacity = '1'; }

                AboutMeTitle.forEach((item, index) => {
                    setTimeout(() => {
                      setTitle((prevTitle) => prevTitle + item);
                    }, index * 100);
                  });
            
            }, 3000);

                items.forEach((item, index) => {
                const element = document.getElementById(item);
                    if (element) {
                        setTimeout(() => {
                        element.style.transform = 'rotate(720deg)';
                        element.style.left = '10px';
                        }, 350 * (index + 1));
                    }
                });
        }, 1500);
  }, []);

  return (
    <>
      <Aboutme style={{ borderLeft: "10px green solid" }} id="aboutme">
<h1 style={{ marginTop: "20px", color: "red", fontWeight: "bolder" }}>{title}</h1>

        <LogoWrapper id="react" src={reactlogo} alt="React Logo" top="18%" />
        <LogoWrapper id="javascript" src={javascriptlogo} alt="Javascript Logo" isRounded top="45%" />
        <LogoWrapper id="html" src={htmllogo} alt="Html Logo" isRounded top="70%" />

        <p id="summery" style={{opacity: '0', transition: '2s ease-in', textAlign: 'left', margin: '0', padding: '16px', fontSize: '22px', fontWeight: '600', color: 'white', width: "85%", float: "right" }}>
          As a seasoned web developer, coder, and designer, I bring a wealth of experience in crafting elegant and efficient digital solutions. Proficient in HTML, CSS, JavaScript, and React.js, I specialize in developing websites that seamlessly blend functionality with aesthetic appeal. My meticulous attention to detail ensures the creation of beautiful and user-friendly interfaces tailored to meet practical user needs.
        </p>
      </Aboutme>
    </>
  );
};

export default AboutMe;
