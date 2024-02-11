import { useState, useEffect } from "react";
import projectdata from '../data/projectsdata.json';

interface Repository {
    name: string;
    html_url: string;
    description: string;
    languages: LanguageData;
  }
  
  interface LanguageData {[key: string]: number | undefined;}


const Projects = () => {
  const [data, setData] = useState<Repository[]>(projectdata);
  const [langTotal, setLangTotal] = useState<number[]>([]);

  useEffect(() => {
    countPercent();
  }, [data]);

  const countPercent = (): void => {
    const totalLang: number[] = [];
  
    data.forEach((repo) => {
      let sum = Object.values(repo.languages).reduce((acc: number, percentage) =>
        acc + (percentage ? percentage : 0), 0);
      totalLang.push(sum);
    });
  
    setLangTotal(totalLang);
  };

  return (

    <>
      <h1>Projects</h1>
      <section>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "8px",
            padding: window.innerWidth <= 800 ? "8px" : "auto",
          }}
        >
          {data.map((repo, index) => (
            <li
              style={{
                position: "relative",
                listStyle: "none",
                boxShadow: " 0 0 6px 0.3px gray inset",
                margin: "8px",
                textAlign: "left",
                paddingLeft: "10px",
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'space-between',
                width: window.innerWidth <= 800 ? "96%" : "47%",
                backgroundColor: 'rgba(25, 220, 100, 0.2)'

              }}
              key={repo.name}
            >
              <h2>
                <strong>{repo.name}</strong> <br />
                <a
                  target="_blank"
                  style={{ color: "wheat", fontSize: "50%" }}
                  href={repo.html_url}
                >
                  {"Source Code"}
                </a>{" "}
                {"  "}
                <a
                  style={{ color: "wheat", fontSize: "50%" }}
                  href={repo.html_url}
                >
                  {"Live Demo"}
                </a>
              </h2>
              <p style={{ padding: "10px", marginBottom: "40px", color: 'aquamarine' }}>
                {<strong style={{ color: 'white', fontSize: '140%' }}>Description: </strong>}
                {repo.description}
              </p>

              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  listStyle: "none",
                  padding: "4px",
                  position: "relative",
                  bottom: "8px",                        
                }}
              >
                {Object.entries(repo.languages).map(
                  ([language, percentage]) => (
                    <li
                      style={{
                        margin: "5px",
                        marginLeft: "8px",
                        paddingLeft: "5px",
                        borderLeft: "2px solid red",
                        borderTopLeftRadius: "5px",
                        borderBottomLeftRadius: "5px",

                      }}
                      key={language}
                    >
                      <strong style={{ color: "white" }}>
                        {language}:
                      </strong>{" "}
                      <samp style={{ color: "yellow", fontSize: "120%" }}>
  {((percentage && langTotal[index]) ? ((percentage / langTotal[index]) * 100).toFixed(1) + "%" : "0%")}
</samp>
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>

  );
};

export default Projects;

