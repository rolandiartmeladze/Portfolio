import React, {useState, useEffect} from "react";

import './Blog.css';
import NewPost from "./CreatNewPost/NewPost";
import Post from "./Posts/Post";
import Posts from "./Posts/Posts";

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

    const link = 'https://mica-soft-makeup.glitch.me';
    

    useEffect(() => {
        fetch(`${link}/api/profile`)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
      

    return (
        <section className="Blog-container">

            
  
<div className="main-info">            
    
    <h1 className="Blog-title">blog</h1>

{data &&
<div className="info-cont">
  <img className="profile-avatar" src={data.avatar} alt="" />
    <h2 style={{transform: 'scale(1)'}}>{data.name}</h2>
    </div>
}     
 </div>
<div style={{display: 'flex', width: '100%', maxHeight: '80%'}}>


<NewPost />

<Post />
</div>

<Posts />

        </section>
    )
};

export default Blog;