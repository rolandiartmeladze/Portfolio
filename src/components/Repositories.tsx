import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  languages_url: string;
}

interface LanguageData {[key: string]: number;}

export default function GithubRepository(): JSX.Element {
  const [dataFromGithub, setDataFromGithub] = useState<Repository[]>([]);
  const [lang, setLang] = useState<LanguageData[]>([]);
  const [landToTal, setLangTotal] = useState<number[]>([]);

  var totalLang: number[];

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const username = 'rolandiartmeladze';
        const token = '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';

        const response: AxiosResponse<Repository[]> = await axios.get(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setDataFromGithub(response.data);

        const languagePromises = response.data.map((repo) =>
          axios.get<LanguageData>(repo.languages_url)
        );

        const languageResponses = await Promise.all(languagePromises);
        const languagesData = languageResponses.map(
          (response) => response.data
        );
        setLang(languagesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => { countPercent(); }, [lang]);

  const countPercent = (): void => {
    totalLang = [];
    dataFromGithub.forEach((item, index) => {
      let sum = 0;
      const languageEntries =
        lang[index] && Object.entries(lang[index]);

      languageEntries.forEach(([language, percentage]) => {
        sum += percentage;
      });
      totalLang.push(sum);
    });
    setLangTotal(totalLang);
  };

  return (
    <>
      <div>
        <h1 style={{ borderBottom: '3px red solid' }}>
          My GitHub Repositories Api
        </h1>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "8px",
            padding: window.innerWidth <= 800 ? "8px" : "auto",
          }}
        >
          {dataFromGithub.map((repo, index) => (
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
              }}
              key={repo.id}
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
                {lang[index] &&
                  Object.entries(lang[index]).map(
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
                        {
                          <strong style={{ color: "white" }}>
                            {language}:
                          </strong>
                        }{" "}
                        <samp style={{ color: "yellow", fontSize: "120%" }}>
                          {((percentage / landToTal[index]) * 100).toFixed(1) + "%"}
                        </samp>
                      </li>
                    )
                  )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
