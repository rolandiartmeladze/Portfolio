import React, { useState, useEffect } from "react";
import "./NewPost.css";

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

const NewPost = () => {
  // const [posts, setPosts] = useState<any[] | null>(null);

  // const [text, setText] = useState<string>('');
  // const [name, setName] = useState<string>('');
  // const [email, setEmail] = useState<string>('');
  // const [title, setTitle] = useState<string>('');

  // const [category, setCategory] = useState<string>('ALL');

  //     const DataTransfer = {
  //         Now: () => {
  //           const now = new Date();
  //           const hours = now.getHours().toString().padStart(2, '0');
  //           const minutes = now.getMinutes().toString().padStart(2, '0');
  //         //   const seconds = now.getSeconds().toString().padStart(2, '0');
  //           const year = now.getFullYear();
  //           const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  //           const day = now.getDate().toString().padStart(2, '0');
  //           return `${year}-${month}-${day} ${hours}:${minutes}`;
  //         }
  //       };

  //       const [currentTime, setCurrentTime] = useState(DataTransfer.Now());

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCurrentTime(DataTransfer.Now());
  //     }, 1000);

  //     return () => clearInterval(timer);
  //   }, []);

  const [posts, setPosts] = useState([]);


  const [newPost, setNewPost] = useState({
    title: "",
    post: "",
    owner: "",
    name: "",
    email: "",
  });
  const [newComment, setNewComment] = useState({
    post: 0,
    name: "",
    comment: "",
  });

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
        setNewPost({ title: "", post: "", owner: "", name: "", email: "" });
        fetchPosts(); // Refresh the list of posts
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

  return (<>
      <form id="postform" className="add-post" onSubmit={handleSubmit}>
      <h3>Add New Post</h3>

      <div className="line-cont">
        <label htmlFor="owner">You Name:</label>
        <input
          id="owner"
          onChange={(e) => setNewPost({ ...newPost, owner: e.target.value })}
          value={newPost.owner}
          type="text"
          placeholder="Name"
        />
      </div>

      <div className="line-cont">
        <label htmlFor="email">You Email:</label>{" "}
        <input
          id="email"
          onChange={(e) => setNewPost({ ...newPost, email: e.target.value })}
          value={newPost.email}
          type="email"
          placeholder="Email"
        />
      </div>

      <div className="line-cont">
        <label htmlFor="title">Post Title:</label>{" "}
        <input
          id="title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          type="text"
          placeholder="Title"
        />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        className="line-cont"
      >
        <div style={{ display: "flex" }}>
          <label htmlFor="category">Select Category:</label>{" "}
          <label> {newPost.name}</label>
        </div>

        <div style={{ width: "100%" }}>
          <select
            onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
            value={newPost.name}
            className="select-category"
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
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "underline",
        }}
        className="line-cont"
      >
        <label style={{ width: "auto", flexGrow: "0" }} htmlFor="">
          Srt Pin:
        </label>{" "}
        <input
          style={{
            width: "auto",
            flexGrow: "0",
            boxShadow: "none",
            cursor: "pointer",
          }}
          type="checkBox"
        />
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
        <button onClick={handleSubmit}>Add Post</button>
      </div>
    </form>

  </>
  );
};
export default NewPost;
