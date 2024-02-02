import React, { useEffect , useState} from "react";
import styled from 'styled-components';
import stulogo from '../img/logoStu.png';
import codehslogo from '../img/logoCodehs.webp';
import bitlogo from '../img/BitLogo.jpg';
import arrow from '../icon/arrow.png';


interface Edutype {ismobil: boolean;}

const Edutitle = styled.h1`
      margin-top: 20px;
      margin-bottom: 5px;
      padding: 5px;
      color: rgb(200, 180, 55);
      font-weight: bolder;
`;
const Article = styled.article`
      display: flex ;
      width: 100% ;
      flex-direction: row ;
      align-items: center ;
      padding-left: 5% ;
      justify-content: flex-start ;
      position: relative;
        && strong{
          margin-left: -7px;
        }

      @media (max-width: 750px) {
        flex-direction: column;
        padding-left: 0;
      }
`;
const Eduimg = styled.div`
      background-color: white;
      padding: 3px;
      border-radius: 20%;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width:  20%;
      max-width: 150px;
        && img{
          width: 100%;
        }
      @media (max-width: 750px) {
        width:90%;
        max-width: none;
        max-height: 150px;
        border-radius: 20px;
            && img{
            width:150px;
            }
          }
`;
const Eduinfo = styled.ul`
      list-style: none;
      padding: 10px;
      margin: 5px;
      max-width: 60%;
      text-align: left;
      font-size: 100%;
        && strong{
          color: red;
          color:cyan;
          margin: 4px;
          margin-left: 0px;
          }
          && li{
            font-weight: 400;
            color: white;
            }

          @media (max-width: 750px) {
            max-width: 90%;
            width: 90%;
            padding: 0px;
              && strong{
                font-size: 90%;
                }
                && li{
                  font-size: 80%;
                  }
                  && h1{
                    font-size: 110%;
                  }
            
          }
    
`;
const Eduhead = styled.h1`
      margin: 5px; 
      color: white; 
`;
const Eduarrow = styled.div`
  position: absolute;
  cursor: pointer;
  right: 100px;
  padding: 10px;
  display: flex;
    & img {
      border-radius: 50%;
      transition: 0.5s ease-in-out; 
        &:hover {
          transform: scale(1.05);
          background-color: rgba(55, 255, 220, 0.5);
        }
    }
      & a{
      text-decoration: none;
      margin-top: 15px;
      }

        & samp {
          font-size: 140%;
          color: yellow;
          font-weight: 900;
          transition: 0.3s ease-in-out;
          padding: 8px;
          box-shadow: 0 -3px 9px 0px rgba(25, 250, 100, 0.6) inset;
          border-radius: 8px;
            &:hover {
              color: red;
              box-shadow: 0 -2px 6px 0px rgba(55, 102, 110, 0.9) inset;
            }
          }

    @media (max-width: 750px) {
      position: relative;
      right: 0;
    }
`;


const Education: React.FC<Edutype> = ({ismobil}) => {
    
    const [title, setTitle] = useState("");
    
    useEffect(() => {
      const educationTitle = ["E", "d", "u", "c", "a", "t", "i", "o", "n"];
    
      setTimeout(() => {
              educationTitle.forEach((item, index) => {
        setTimeout(() => {
        setTitle((prevTitle) => prevTitle + item);
        }, index * 100);
    });

      }, 5000);

    


  }, []);


  return (
    <>
      <Edutitle>
        {title}
      </Edutitle>

        <div style={{ width: "100%", minHeight: "300px" }}>

          <Article>

            <Eduimg>            
              <img src={codehslogo} alt="eduLogo" />
            </Eduimg>

              <Eduinfo>

                <Eduhead> codehs.com </Eduhead>

                  <strong style={{color: "yellow"}}>Computer Science in JavaScript 2023 Nov. - 2023 Dec. </strong>

                    <li>
                        <strong>JavaScript Programming:  {' '}</strong>
                        Basic principles, possibilities, practical application.
                    </li>

                        <li>
                            <strong>Problem Fixing:  {' '}</strong>
                            Identify and fix any bugs or errors in your code.
                        </li>

                            <li>
                                <strong>User Interface Optimization:  {' '}</strong>
                                Optimize your UI for responsiveness on different devices.
                            </li>

              </Eduinfo>

                <Eduarrow>            
                  <a href="https://codehs.com/certificate/CEIl14">
                    {ismobil? <samp>read more...</samp> : <img src={arrow} alt="arrow" /> }
                  </a>
                </Eduarrow>

          </Article>

            <Article>

              <Eduimg>            
                <img style={{borderRadius: '50%'}} src={bitlogo} alt="eduLogo" />
              </Eduimg>

                <Eduinfo>

                  <Eduhead> Bitcamp.ge </Eduhead>

                    <strong style={{color: "yellow"}}>Web Development 2022 Nov. - 2023 Sep. </strong>

                      <li>
                          <strong>HTML - CSS:  {' '}</strong>
                          I got acquainted with the basic principles of use and operation.
                      </li>

                          <li>
                              <strong>Javascript:  {' '}</strong>
                              I got acquainted with the principle, basic syntax and possibilities of Mushaoi.
                          </li>

                              <li>
                                  <strong>React.js:  {' '}</strong>
                                  Ability to create a modern dynamic user interface in a simple and comfortable environment.
                              </li>

                </Eduinfo>

                  <Eduarrow>            
                    <a href="https://www.bitcamp.ge/">
                    {ismobil?   <samp>read more...</samp> : <img src={arrow} alt="arrow" />}
                      </a>
                  </Eduarrow>

            </Article>

              <Article>

                <Eduimg>            
                  <img src={stulogo} alt="eduLogo" />
                </Eduimg>

                  <Eduinfo>

                    <Eduhead>The Georgian Technical University (GTU) </Eduhead>

                      <strong style={{ color: "yellow"}}> Bachelor's degree 2015 - 2019 y. </strong>

                        <li>
                          <strong>Information Technology (IT): {' '} </strong>
                          This program typically covers a wide range of topics such as.
                        </li>

                            <li>
                              <strong>Computer Engineering: {' '}</strong>
                              Design and development of computer systems and hardware.
                            </li>

                                <li>
                                  <strong>Network Engineering or Networking: {' '}</strong>
                                  Programs in networking focus on the design, implementation, and
                                  management of computer networks.
                                </li>

                  </Eduinfo>

                    <Eduarrow>            
                    <a href="https://gtu.ge/">
                      {ismobil? <samp>read more...</samp> :<img src={arrow} alt="arrow" /> }
                    </a>
                    </Eduarrow>


              </Article>


      </div>
    </>
  );
};

export default Education;
