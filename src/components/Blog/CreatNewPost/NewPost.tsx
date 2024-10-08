import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./NewPost.css";

import create from "./create";

import { FaUserCircle } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdCategory } from "react-icons/md";

interface Post {
  post_id: number;
  author: number;
  name: string;
  owner: string;
  title: string;
  post: string;
  email: string;
  created_at: string;
  updated_at: string;
  comment_count: number;
  views: number;
  share_count: number;
  comments: Comment[];
}

interface Comment {
  id: number;
  author: number;
  post: number;
  name: string;
  comment: string;
  created_at: string;
}


interface FormProps {
  animation: boolean;
}

  const Form = styled.form<FormProps>`
  
    width: 65%;
    height: auto;
    background: initial;
    margin: auto;
    margin-left: 25px;
    backdrop-filter: blur(3px);
    box-shadow: 0px 0px 150px rgb(255, 255, 255, 0.1) inset,  0px 0px 3px rgb(0, 255, 255);
    border-radius: 10px;
    padding: 4px;
  transition: transform 0.5s ease-in-out;  

  display: ${(props) => (props.animation ? 'block' : 'none')};
  transform: ${(props) => (props.animation ? 'scale(1) translateX(0px)' : 'scale(0) translateX(-300px)')};


  `;



  const HeaderLine = styled.div`

  margin: 5px;
    gap: 10px;
    display: flex;
    color: white;

    
    div {
    gap:3px;
    display: flex;

    select{
    background: none;
    border: none;
    color: white;

    }
    }

`;


const NewPost = () => {
  const [posts, setPosts] = useState([]);

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  
  const [newPost, setNewPost] = useState({
    author: user?.id,
    title: "",
    post: "",
    owner: `${user?.firstname} ${user?.lastname}`,
    name: "",
    email: user?.email,
  });
  const [newComment, setNewComment] = useState({
    post: 0,
    name: "",
    comment: "",
  });


  const [animation, setAnimation] = useState(false)

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/posts/");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);




  
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        setNewPost({ title: "", post: "", owner: "", name: "", email: "", author: "" });
        fetchPosts(); 
      } else {
        console.error("Error creating post:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        setNewComment({ post: 0, name: "", comment: "" });
        fetchPosts();
      } else {
        console.error("Error creating comment:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  useEffect(()=>{
    setTimeout(() => {
         setAnimation(true);
    }, 500);
  },[])


  const createPost = async ()=>{
   return await create(newPost)
  } ;



  const SiNow = () => {
    const now = new Date();
    return now.toLocaleTimeString();
  };

  return (
  <>
      <Form animation={animation} id="postform" className="add-post">
      {/* <h3>Add New Post</h3> */}

      <HeaderLine>
        <div><FaUserCircle /> {user?.firstname} {user?.lastname} </div>
        <div><MdEmail />{user?.email} </div>
        <div><MdAccessTimeFilled /> {SiNow()} </div>
        <div><MdCategory /> 
        <select
            onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
            value={newPost.name}
            name="Category"
            id="category"
          >
            <option value="not selected">select</option>
            <option value="About Me">About Me</option>
            <option value="About Project">About Project</option>
            <option value="Web Developers">Web Developers</option>
            <option value="Feedback">Feedback</option>
            <option value="Tag a user">Tag user</option>
          </select>

        </div>
      </HeaderLine>

        <label htmlFor="title">Post Title:</label>{" "}
        <input
          id="title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          type="text"
          placeholder="Title"
        />

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        className="line-cont"
      >
      </div>


      <div className="line-cont write-post">
        <label style={{ flexGrow: "0" }} htmlFor="postInput">
          Wrait Post:
        </label>
        <div style={{ width: "100%" }}>
          <textarea
            value={newPost.post}
            onChange={(e) => setNewPost({ ...newPost, post: e.target.value })}
            style={{ flexGrow: "1" }}
            id="postInput"
            placeholder="Write Post ..."
          />
        </div>
      </div>

      <div className="btn-cont">
        <button 
        onClick={createPost}
        // onClick={handleSubmit}
        >Add Post</button>
      </div>
    </Form>

  </>
  );
};
export default NewPost;
