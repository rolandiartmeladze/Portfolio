import React, { useEffect, useState } from "react";
import '../Posts/Post.css';
import { RxAvatar } from "react-icons/rx";
import { FaClock, FaComment, FaRegEye, FaShare } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

interface PostProps {
  title: string;
  owner: string;
  share_count: number;
  views: number;
  comment_count: number;
  name: string;
  created_at: string;
  post: string;
  post_id: number;
}

interface Props3{
    selectedPost: number | null;
}

const PostComponent = ({selectedPost}:Props3) => {
  const [posts, setPosts] = useState<PostProps[]>([]);
//   const [selectedPost, setSelectedPostId] = useState<number | null>(10);
  const [filteredPosts, setFilteredPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/posts/')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  useEffect(() => {
    if (selectedPost) {
      const filtered = posts.filter(post => post.post_id === selectedPost);
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedPost, posts]);

  function formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Month +1 because getUTCMonth() is zero-based
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }

  return (

    <section className="Blog-container">

    <div className="Post-container">
      {filteredPosts.map((post) => (
        <article className="Post-element" key={post.post_id}>
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
            <div style={{ float: 'left', display: 'flex' }}>
              <span><FaRegEye /> Views {post.views}</span>
              <span><FaComment /> Comments {post.comment_count}</span>
              <span><FaShare /> Share {post.share_count}</span>
            </div>
            <samp>მეტის ნახვა</samp>
          </div>
        </article>
      ))}
    </div>
    </section>
  );
};

export default PostComponent;
