// add initai commit  => optimise code structure / optimise style with react styled component

import React, { useState, useEffect } from "react";
import { fetchPosts } from "../../api";

import { useNavigate } from "react-router-dom";

import "./Blog.css";
import NewPost from "./CreatNewPost/NewPost";
import Post from "./Posts/AboutProject";
import Posts from "./Posts/Posts";

import Author from "./author/Author";

import LogOut from "./author/LogOut";

interface Props {
  name: string;
  avatar: string;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

interface Props2 {
  setSelectedPost: Function;
}

const Blog = ({ setSelectedPost }: Props2) => {
  const navigate = useNavigate();

  const [authorised, setAuthorised] = useState<boolean>(false);

  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    token && setAuthorised(true);

    const getPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };

    getPosts();
  }, []);

  const [data, setData] = useState<Props | null>(null);
  const [signUp, setSignUp] = useState<boolean | null>(false);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <section className="Blog-container">
      <div className="main-info">
        <h1 style={{ fontFamily: "Roboto, sans-serif" }} className="Blog-title">
          Your Blog
        </h1>

        <div className="info-cont">
          {/* <img className="profile-avatar" src={`https://avatars.githubusercontent.com/u/13499054?v=4`} alt="" />
           */}
          {authorised && (
            <>
              <h2
                style={{
                  transform: "scale(1)",
                  boxShadow: "0  0.5px  0.4px 0px yellow",
                  color: "yellow",
                  margin: "3px 12px",
                  padding: "2px 6px",
                }}
              >
                {user?.firstname} {user?.lastname}
              </h2>

              <samp
                style={{
                  cursor: "pointer",
                  padding: "6px",
                  margin: "4px",
                  boxShadow: " 0.4px  0.2px  0.4px 0.2px yellow",
                  borderBottomRightRadius: "4px",
                }}
                onClick={() => {
                  LogOut();
                }}
              >
                Log Out
              </samp>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          width: "100%",
          maxHeight: "auto",
          gridTemplateColumns: authorised ? "none" : "30% 70%",
          gridTemplateRows: authorised ? "auto" : "none",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        {authorised && <NewPost />}

        <Author authorised={authorised} setAuthorised={setAuthorised} />

        <Post />
      </div>

      <Posts setSelectedPost={setSelectedPost} />
    </section>
  );
};

export default Blog;
