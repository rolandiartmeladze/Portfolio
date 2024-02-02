import { useState } from 'react';
import Explogo from '../img/experience1.png';
import styled from 'styled-components';
import data from '../data/data.json';

interface ExperienceItem {
    title: string;
    company: string;
    datatime: string;
    description: string;
    shortDescription: string;
    descriptionVisible: boolean;
  }
  interface ExpconteinerProps {
    descriptionVisible: boolean;
  }
const Expsection = styled.section`
        display: flex;
        flex-direction: row-reverse;
        padding: 0 5%;
        width: 90%;
        align-items: flex-start;
                @media (max-width: 750px) {
                        flex-direction: column;
                        width: 100%;
                }
`;

const Expinfo = styled.article`
        list-style: none;
        width: 80%;
        display: flex;
        flex-direction: column;
        position: relative;
        float: right;
            @media (max-width: 750px) {width: 100%;} 
`;

const Explogoconteiner = styled.article`
        width: 15%;
        margin: 3%;
        position: relative;

            & img {
                width: 100%;
                border-radius: 50%;
                position: relative;
                z-index: 1;
            }

  &::before {
    content: "";
    position: absolute;
    top: -7%;
    left: -7%;
    width: 114%;
    height: 114%;
    background: linear-gradient(
      to right,
      rgba(225, 20, 180, 0.5),
      rgba(25, 250, 100, 0.5),
      rgba(25, 0, 180, 0.5),
      rgba(225, 10, 10, 0.5)
    );
    z-index: 0;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
  }

    @keyframes rotate {
        from {transform: rotate(0deg); }
        to {transform: rotate(360deg);}
    }

        @media (max-width: 750px) {
                width: 100%;
                max-height: 150px;
                margin:0;
                display: flex;
                justify-content: center;

                    & img {max-width: 140px;}
                    &::before {display: none;}
        }
`;

const Explogoconteinerimg = styled.div`
        @media (max-width: 750px) {
            width: 90%; 
            background-color: white; 
            border-radius: 30px
        }
`;

const Exptitle = styled.h1`
  color: wheat;
  margin: 5px;
  margin-right: auto;
  margin-left: 15px;
  font-weight: 700;
  padding: 8px;
  font-size: 40px;
  text-align: left;
  width: 60%;
  float: right;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(225, 20, 180, 0.3),
      rgba(25, 250, 100, 0.2),
      rgba(25, 20, 100, 0.1),
      rgba(225, 220, 180, 0)
    );
    z-index: -1;
    border-top-left-radius: 30px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(
      to right,
      rgba(225, 20, 180, 0.8),
      rgba(25, 250, 100, 0.4),
      rgba(25, 20, 100, 0.2),
      rgba(225, 220, 180, 0)
    );
    z-index: 1;
  }

  @media (max-width: 750px) {
    &::before {display: none;}
    &::after {
        width: 95%;

        background: linear-gradient(
            to right,
            rgba(225, 20, 180, 0.8),
            rgba(25, 250, 100, 0.4),
            rgba(25, 20, 100, 0.4),
            rgba(225, 220, 180, 0.8)
          );      
    }
    padding-left: 15px;
    font-size: 20px;
    width: 90%;
  }
`;

const Expconteiner = styled.div<ExpconteinerProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 3px;
    & samp {
        font-size: 30px;
        font-weight: 700;
        padding: 12px;
        background-color: blue;
        border-radius: 10px;
        margin: 8px;
        margin-top: 18px;
    }
        & ul {
            list-style: none;
            padding: 8px;
            margin: 3px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
            & h1 {
                padding: 4px;
                margin: 3px;
                font-size: 30px;
                font-weight: 900;
                color: white;
            }
            & strong{color:yellow; text-align: left;}
            & b{color:cyan;}
            & p{
                font-weight: 700; 
                color: white; 
                text-align: left;



                height: auto;
    // overflow: hidden;
    transition: height 0.5s ease-in-out;
            }

                  @media (max-width: 750px) {
                    & samp {
                        font-size: 20px;
                        font-weight: bolder;
                        padding: 10px;
                        border-radius: 8px;
                        margin: 3px;
                        margin-top: 15px;
                        margin-left: 10px;
                    }
                    & ul {padding: 2px;}
                    & h1{font-size: 20px; padding:0; margin: 0;}
                    & p{
                        font-weight: bold; 
                        padding: 2px; 
                        font-size: 100%;
                        margin: 0;
                    }
                }

  `;


  const Showbtn = styled.button`
  left: 30px;
//   position: absolute;
  color: yellow;
  cursor: pointer;
  background: linear-gradient(
    to top,
    rgba(25, 250, 100, 0.7),
    rgba(25, 20, 100, 0.2),
    rgba(225, 220, 180, 0),
    rgba(25, 20, 100, 0.2),
    rgba(25, 250, 100, 0.7)
  );
border-radius: 5px;
  border: none;
  font-weight: 900;
  font-size: 15px;
  padding: 5px;

  `;











const Experience: React.FC<{ ismobil: boolean }> = ({ismobil}) => {
    const [experanceData, setExperanceData] = useState<ExperienceItem[]>(data as ExperienceItem[]);

    const toggleDescription = (index: number): void => {
      setExperanceData((prevData) => {
        const newData = [...prevData];
        newData[index].descriptionVisible = !newData[index].descriptionVisible;
        return newData;
      });
    };    
    return (
    <>
      <h1>Experience</h1>

      <Expsection>
        <Explogoconteiner>
          <Explogoconteinerimg>
            <img src={Explogo} alt="Work experience" />
          </Explogoconteinerimg>
        </Explogoconteiner>

        <Expinfo>
          <Exptitle>My work experience in web development totals 1-2 years.</Exptitle>
          {experanceData.map((expitem, index) => (
            <Expconteiner key={index}  descriptionVisible={expitem.descriptionVisible}>
              <samp> 0{index + 1} </samp>
              <ul>
                <h1>{expitem.title}</h1>
                <li>
                  <strong>{expitem.company}</strong>
                </li>
                <li>
                  <b>{expitem.datatime}</b>
                </li>
                <li>
                <p>
                    {ismobil
                      ? expitem.descriptionVisible
                        ? expitem.description
                        : ''
                      : expitem.description}
                  </p>
                  {ismobil && (
                    <Showbtn onClick={() => toggleDescription(index)}>
                      {expitem.descriptionVisible ? 'less...' : 'more...'}
                    </Showbtn>
                  )}
                </li>
              </ul>
            </Expconteiner>
          ))}
        </Expinfo>
      </Expsection>
    </>
  );
};

export default Experience;
