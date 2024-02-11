import React, { useEffect , useState} from "react";
import styled from 'styled-components';
import reactlogo from '../icon/ReactLogo.png';
import javascriptlogo from '../icon/javascriptLogo.png';
import htmllogo from '../icon/html.png';


interface LogoWrapperProps {
  id: string;
  src: string;
  alt: string;
  isRounded?: boolean;
  ismobil?:boolean;
}
interface abouteme { ismobil: boolean; }

const Abouttitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 5px;
  color: rgb(200, 180, 55);
  font-weight: bolder;
`;

const AbouExpeBtn = styled.div<{ismobil?: boolean }>`
      transition: 0.8s ease-in-out;
      width: ${({ismobil}) => (ismobil ? '30px' : '60px')};
      height: ${({ismobil}) => (ismobil ? '30px' : '60px')};
      font-size: ${({ismobil}) => (ismobil ? '80%' : '100%')};
      margin-top: ${({ismobil}) => (ismobil ? '-28px' : '-45px')}; 
      margin-left: ${({ismobil}) => (ismobil ? '81%' : '88%')};
      float: right;
      background-color: green;
      border-radius: 50%;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 5;
      cursor: pointer;
      opacity: 0;
`;

const Aboutme = styled.div`
      border-left: 10px green solid;
      width: 95%;
      float: right;
      margin-top: 15px;
      margin-left: 200%;
      transition: 1.8s ease-in;
      position: relative;
      overflow: hidden;
      border-top-left-radius: 100px;
      z-index: 0;
      background-color: rgb(8, 202, 41, 0.2);
          &:before {
            content: '';
            position: absolute;
            top: -40px;
            left: 0;
            width: 100%;
            height: 20px;
            background: linear-gradient(to right, rgba(0, 0, 255, 0.4), rgba(255, 255, 0, 0.4), rgba(255, 0, 0, 0.4));
            z-index: 1;
            border-top: 40px solid transparent;
          }
`;

const Abouttext = styled.p`
  opacity: 0;
  transition: 2s ease-in;
  text-align: left;
  margin: 0;
  padding: 16px;
  font-size: 22px;
  font-weight: 600;
  color: white;
  width: 90%;
  float: right;
    @media (max-width: 750px) {
      font-size: 14px;
      width: 80%;
      padding-right: 5px;

    }
`;




const LogoContainer = styled.div<{ ismobil?: boolean }>`
      position: absolute;
      width: 40px;
      transition: 2s ease-in;
      left: 115%;
`;

const LogoImage = styled.img<{ isRounded?: boolean }>`
      width: 100%;
      border-radius: ${({ isRounded }) => (isRounded ? '50%' : '0')};
`;

const LogoWrapper: React.FC<LogoWrapperProps> = ({ id, src, alt, isRounded, ismobil }) => (
      <LogoContainer id={id}  ismobil={ismobil}>
        <LogoImage src={src} alt={alt} isRounded={isRounded} />
      </LogoContainer>
);

const AboutMe: React.FC<abouteme> = ({ismobil}) => {
    
    const [title, setTitle] = useState("");
    
    useEffect(() => {
      const AboutMeTitle = ["A", "b", "o", "u", "t", " ", "M", "e"];
      const items = ['react', 'javascript', 'html'];
      let aboutme = document.getElementById('aboutme');  
      let summery = document.getElementById('summery');  
      let expbtn = document.getElementById('expbtn');  
      
        setTimeout(() => {

          if (aboutme) { aboutme.style.marginLeft = '5%'; }
          setTimeout(() => { 
            if (expbtn) { expbtn.style.opacity = '1'; } 
          }, 1300);
          
              setTimeout(() => {
                  if (summery) { 
                  summery.style.opacity = '1';
                  }
                      AboutMeTitle.forEach((item, index) => {
                          setTimeout(() => {
                          setTitle((prevTitle) => prevTitle + item);
                          }, index * 100);
                      });
              
              }, 3000);

              let iconsStartY = 0;
                ismobil? iconsStartY = 100 :   iconsStartY = 80;

                items.forEach((item, index) => {

                  const element = document.getElementById(item);

                      if (element) {
                          setTimeout(() => {
                          element.style.transform = 'rotate(720deg)';
                          element.style.left = '10px';
                          element.style.top = iconsStartY + 'px' ;
                          iconsStartY = iconsStartY + 50;
                          }, 350 * (index + 1));


                      }
                  });
          }, 900);
  }, []);


  return (

    <>
      <Aboutme style={{ minHeight: ismobil ? "40vh" : "60vh" }} id="aboutme">
        <Abouttitle>
          {title}
        </Abouttitle>

            <LogoWrapper id="react" src={reactlogo} alt="React Logo" ismobil />
            <LogoWrapper id="javascript"
              src={javascriptlogo}
              alt="Javascript Logo"
              ismobil
              isRounded />
            <LogoWrapper id="html"
              src={htmllogo}
              alt="Html Logo"
              ismobil
              isRounded />

          <Abouttext id="summery" >
            As a seasoned web developer, coder, and designer, I bring a wealth of
            experience in crafting elegant and efficient digital solutions.
            Proficient in HTML, CSS, JavaScript, and React.js, I specialize in
            developing websites that seamlessly blend functionality with aesthetic
            appeal. My meticulous attention to detail ensures the creation of
            beautiful and user-friendly interfaces tailored to meet practical user
            needs.
          </Abouttext>

      </Aboutme>

        <AbouExpeBtn id="expbtn" ismobil = {ismobil}>
            Expeance
          </AbouExpeBtn>

    </>

  );
};

export default AboutMe;
