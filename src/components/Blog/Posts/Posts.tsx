import React, { useEffect, useState } from "react";
import '../Post.css';
import { RxAvatar } from "react-icons/rx";
import { FaClock, FaComment, FaRegEye, FaShare } from "react-icons/fa";

import { MdCategory } from "react-icons/md";
import { useNavigate } from "react-router-dom";


interface PostProps {
  title: string;
  owner: string;
  share_count:number;
  views: number;
  comment_count:number;
  name:string;
  created_at:string;
  post:string;
  post_id:number;
}
interface Props{
  setSelectedPost: Function
}

  
const Posts = ({setSelectedPost}:Props) => {
  const navigate = useNavigate()


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/posts/')
      .then(response => response.json())
      .then(data => setPosts(data));

  }, []);


  function formatTimestamp(timestamp:string) {
    const date = new Date(timestamp);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth()).padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }
  
  



  return (
    <div className="Post-container">
      { posts && posts?.map((post:PostProps) => (
        <article  onClick={()=>{
          navigate(`./${post.post_id}`);
         setSelectedPost(post.post_id)
         }} className="Post-element">
          <div className="post-head">
          <h1 className="post-title">{post.title}</h1>
          <div className="info-post-owner">
             <span><RxAvatar />{post.owner}</span>
            <span><FaClock />{formatTimestamp(post.created_at)}</span>
            <span><MdCategory />{post.name}</span> 
          </div>            
          
          </div>
        
        <div className="content">

        
          <p className="post-body">
            {(post.post).substring(0, 400)}{post.post.length >= 400 && ' ...'}
          </p>
          
          </div>
          <div className="post-footer">
           <div style={{float: 'left', display: 'flex'}}>
           <span><FaRegEye /> Views {post.views}</span> 
           <span><FaComment /> Comments {post.comment_count}</span> 
           <span><FaShare /> Share {post.share_count}</span> 
           </div>
           <samp>მეტის ნახვა</samp>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Posts;
