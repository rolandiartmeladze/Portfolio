import React, {useState, useEffect} from "react";
import { fetchPosts } from '../../api';
import { useNavigate } from "react-router-dom";

import './Blog.css';
import NewPost from "./CreatNewPost/NewPost";
import Post from "./Posts/AboutProject";
import Posts from "./Posts/Posts";
import Register from "./author/Register";

import Author from "./author/Author";

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

  const navigate = useNavigate();

  const [authorised, setAuthorised] = useState<boolean>(false) 

  

  const [posts, setPosts] = useState<BlogPost[]>([]);


  useEffect(() => {

    // const token = localStorage.getItem('accessToken');
    // token && setAuthorised(true);


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
    
    const LogOut = async () => {
      try {
        const token = localStorage.getItem('accessToken'); 
      
        if (!token) {
          console.error('No token found, cannot log out.');
          return;
        }
    
        const logoutResponse = await fetch("http://127.0.0.1:8000/api/logout/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`, // or Bearer if using JWT
          },
        });
    
        if (logoutResponse.ok) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('user');
          setAuthorised(false);  
          navigate('/logout');  
        } else {
          const errorData = await logoutResponse.json();
          console.error('Logout failed:', errorData);
        }
      } catch (error) {
        console.error('An error occurred during logout:', error);
      }
    };
            

    // useEffect(() => { 
    //     fetch(`${link}/api/profile`)
    //       .then(response => response.json())
    //       .then(data => setData(data))
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, []);
    
    // const [selectedPost, setSelectedPost] = useState<number | null>(null)

    const avatar = 'https://avatars.githubusercontent.com/u/13499054?v=4';

    // const user = localstorage.getitem()

    const [signUp, setSignUp] = useState<boolean | null>(false);


    const user = JSON.parse(localStorage.getItem('user') || '{}');

    return (
        <section className="Blog-container">

            
  
<div className="main-info">            
    
    <h1   style={{ fontFamily: 'Roboto, sans-serif' }} className="Blog-title">Your Blog</h1>


<div className="info-cont">
  {/* <img className="profile-avatar" src={`https://avatars.githubusercontent.com/u/13499054?v=4`} alt="" />
     */}
<h2 style={{transform: 'scale(1)'}}>{user?.firstname} {user?.lastname}</h2>

  {authorised && 
      <samp style={{cursor: 'pointer', padding: '6px', margin: '4px', boxShadow: ' 0.4px  0.2px  0.4px 0.2px yellow', borderBottomRightRadius: '4px'}} onClick={LogOut}>Log Out</samp>

  }
  
    </div>
   
 </div>
<div style={{display: 'flex', width: '100%', maxHeight: 'auto', alignItems: 'flex-start'}}>


{/* <Register /> */}

      { authorised &&   <NewPost /> }
      <Author authorised={authorised} setAuthorised={setAuthorised}  />



{/* <Login /> */}

<Post />
</div>

<Posts setSelectedPost={setSelectedPost} />

        </section>
    )
};

export default Blog;