import React, {useEffect, useState} from "react";
// import {fetchPosts} from '../../api';

import axios from 'axios';

import './Projects.css'

interface Repo {
    title: string;
    content:string;
  }
  
  interface Props {
    repos: Repo[];
  }
  
  const Projects: React.FC = () => {
    const [data, setData] = useState<Props | null>(null);
  

    const Repositories_name =[
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

    
        const [posts, setPosts] = useState([]);


        useEffect(() => {
          fetch('http://127.0.0.1:8000/api/posts/')
            .then(response => response.json())
            .then(data => setPosts(data));

        }, []);

        
        setTimeout(() => {
          console.log(posts)  
        }, 3000);


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
                {posts?.map((repo: Repo) => (
                        <li key={repo.title} style={{ display: 'flex', flexDirection: 'row' }}>
                            {repo.title} '/' {repo.content}
                            
                        </li>
                    ))}     

                 {/* {data?.repos?.map((repo: Repo) => (
                        <li key={repo.name} style={{ display: 'flex', flexDirection: 'row' }}>
                            {repo.name}
                            <a target="_blank" style={{ color: 'red' }} href={repo.languages_url} rel="noopener noreferrer">
                                languages link
                            </a>
                        </li>
                    ))}                 */}
                    
                     </ul>
                </div>
        </section>
    );

}
export default Projects;