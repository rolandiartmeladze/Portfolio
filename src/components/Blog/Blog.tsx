import React, {useState, useEffect} from "react";

import './Blog.css';

    interface Props{
        name: string;
        avatar: string;
      }
      


const Blog =()=>{

    const [data, setData] = useState<Props | null>(null);
    // useEffect(() => {
    //   fetch('http://127.0.0.1:5000/api/profile')
    //     .then(response => response.json())
    //     .then(data => setData(data));
    // }, []);

    

    useEffect(() => {
        fetch('/api/profile')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
      


    // on githube
    // useEffect(() => {
    //     fetch('/api/profile')
    //       .then(response => response.json())
    //       .then(data => setData(data))
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, []);  



    

    return (
        <section>

            <h1  style={{transform: 'scale(1)', width: '100%', float: 'none'}}>
                blog
            </h1>
            
  
<div className="main-info">
{data &&<>
  <img className="profile-avatar" src={data.avatar} alt="" />
    <h2 style={{transform: 'scale(1)'}}>{data.name}</h2>
</>
}     
 </div>


        </section>
    )
};

export default Blog;