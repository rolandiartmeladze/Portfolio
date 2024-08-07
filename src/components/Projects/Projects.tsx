import React, {useEffect, useState} from "react";

import './Projects.css'

interface Repo {
    name: string;
    languages_url:string;
  }
  
  interface Props {
    repos: Repo[];
  }
  
  const Projects: React.FC = () => {
    const [data, setData] = useState<Props | null>(null);
  
    useEffect(() => {
      fetch('http://127.0.0.1:5000/api/projects')
        .then(response => response.json())
        .then(data => setData({ repos: data }));


    }, []);
  
    if (data) {
      data.repos.map((repo: Repo) => console.log(repo.name));
    }
  

    const RepositoriesName =[
        'E-Commerce-Application_Frontend',
        'Portfolio',
        'DataCount',
        'TravelInGeorgia_Test',
        'Vacation-In-Georgia',
        'PongGame',
        'BreackOutGame_Test',
        'PortfolioBackend',
        'E-Commerce-Application_Backend'

    ];


    const selectedRepositories =  data?.repos.filter((repo: Repo)=> RepositoriesName.includes(repo.name));


    return(
        <section className="Projects-container">
            <h1 style={{    display: 'flex', float:'none'}}>
                Projects
            </h1>

            <div>

                <h4>
                    reposytory  form Githube API
                </h4>

                <ul style={{flexDirection: 'column', alignItems: 'flex-start'}}>

                    {
                        selectedRepositories?.map((repo:Repo)=>(
                            

                            
                            <li style={{display: 'flex', flexDirection: 'row'}}>
                                {repo.name}
                               <a target="_blank" style={{color: 'red'}} href={`${repo.languages_url}`}>languages link</a>                   

                            </li>
                            
                        ))
                    }
                </ul>
                </div>
        </section>
    );

}
export default Projects;