
import React, { useState, useEffect } from "react";

import pimg1 from '../img/Capture.png';
import '../style/project.css';

// import pimg2 from '../img/';

import axios, { AxiosResponse } from "axios";

import styled from 'styled-components';
import { url } from "inspector";

interface LanguageData {
  percentage: number;
}

interface ProjectContainerProps {
  isClicked: boolean;
  flex: 1 | 6; 

  onClick: () => void;
}


interface ReposInter {
        name: string;
        description: string;
        html_url: string;
        languages_url: string;
        languages: LanguageData;
        
}
interface LanguageData { [key: string]: number; }


const Projects: React.FC = () => {
  const [repodata, setRepoData] = useState<ReposInter[]>([]);
  const [lang, setLang] = useState<LanguageData[]>([]);
  const [langTotal, setLangTotal] = useState<number | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await axios.get(`https://api.github.com/users/rolandiartmeladze/repos`);
        setRepoData(response.data as ReposInter[]);
            const languagePromises = response.data.map((repo: ReposInter) => axios.get<LanguageData>(repo.languages_url));
            const languageResponses = await Promise.all(languagePromises);
            const languagesData = languageResponses.map((response) => response.data);
                setLang(languagesData); 
    } catch (error) { console.error('Error fetching data:', error);}
    };
    fetchData();
  }, []);

  const [langactive, setLangActive] = useState<object | null>(null);

  useEffect(() => { 
    countPercent(); 
  }, [langactive]);
  
  const countPercent = (): void => {
    if (langactive) {
      let totalPercentage = Object.values(langactive).reduce((acc, percentage) => acc + percentage, 0);
      setLangTotal(totalPercentage); 
    } 
  };
                
const [clickedIndex, setClickedIndex] = useState<number | null>(null);

const handleClick = (index: number) => {
  setClickedIndex(index);
  setLangActive(lang[index])
  console.log(langactive)
  console.log(langTotal)

};

console.log(lang)


  return (

    <section className="repo-section">
      <h1>Repository</h1>

      <div className="projects-container">

        {repodata.map((repo: ReposInter, index) => (
          <article
                className={index === clickedIndex ? "projects-item" : "projects-item-active"}
                key={index}
                onClick={() => handleClick(index)}
              >
              <h1> {repo.name} </h1>
            
            <p> {repo.description} </p>
            <div
  className={index === clickedIndex ? "lang-line-active" : "lang-line"}
>

{index === clickedIndex && lang[index] && (
  Object.entries(lang[index]).map(([language, percentage]) => (
    <li
      style={{
        listStyle:'none',
        margin:'5px'
      }}
      key={language}
    >
      <strong style={{ color: "white" }}>
        {language}:
      </strong>{" "}
      <samp style={{ color: "yellow", fontSize: "120%" }}>
      {((percentage / (langTotal ?? 1)) * 100).toFixed(1) + "%"} 
      </samp>      
    </li>
  ))
)}
</div>

</article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
