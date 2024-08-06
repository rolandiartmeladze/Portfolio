import React, {useEffect, useState} from "react";

import './Projects.css'

interface Repo {
    name: string;
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
                        data?.repos.map((repo:Repo)=>(
                            <li>
                                {repo.name}
                            </li>
                        ))
                    }
                </ul>
                </div>
        </section>
    );

}
export default Projects;