import React, {useState, useEffect} from "react";
  import { fetchPosts } from '../../api';

import './Blog.css';
import NewPost from "./CreatNewPost/NewPost";
import Post from "./Posts/AboutProject";
import Posts from "./Posts/Posts";

interface Props{
    name: string;
    avatar: string;
  }
  

interface BlogPost {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

interface Props2{
  setSelectedPost: Function;

}

const Blog = ({setSelectedPost}:Props2) =>{




  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };

    getPosts();
  }, []);





    const [data, setData] = useState<Props | null>(null);
    // useEffect(() => {
    //   fetch('http://127.0.0.1:5000/api/profile')
    //     .then(response => response.json())
    //     .then(data => setData(data));
    // }, []);

    // const link = 'https://mica-soft-makeup.glitch.me';
    

    // useEffect(() => {
    //     fetch(`${link}/api/profile`)
    //       .then(response => response.json())
    //       .then(data => setData(data))
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, []);
    
    // const [selectedPost, setSelectedPost] = useState<number | null>(null)

    const avatar = 'https://avatars.githubusercontent.com/u/13499054?v=4';


    return (
        <section className="Blog-container">

            
  
<div className="main-info">            
    
    <h1 className="Blog-title">blog</h1>


<div className="info-cont">
  <img className="profile-avatar" src={`https://avatars.githubusercontent.com/u/13499054?v=4`} alt="" />
    <h2 style={{transform: 'scale(1)'}}>{'Roland Artmeladze'}</h2>
    </div>
   
 </div>
<div style={{display: 'flex', width: '100%', maxHeight: '80%'}}>


<NewPost />

<Post />
</div>

<Posts setSelectedPost={setSelectedPost} />

        </section>
    )
};

export default Blog;