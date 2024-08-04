import React, { useEffect, useState } from "react";
import './Post.css';
import { RxAvatar } from "react-icons/rx";
import { FaClock } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

interface PostProps {
  title: string;
  owner: string;
  date: string;
  category: string;
  post: string;
}

// const renderContent = (text: string) => {
//     const lines = text.split('\n');
//     const elements: JSX.Element[] = [];
//     let buffer = '';
//     let isHeader = false;
  
//     lines.forEach((line, index) => {
//       if (line.startsWith('#')) {
//         if (buffer) {
//           elements.push(
//             isHeader ? (
//               <h3 key={elements.length}>{buffer.trim()}</h3>
//             ) : (
//               <p className="post-body" key={elements.length}>
//                 {buffer.trim()}
//               </p>
//             )
//           );
//           buffer = '';
//         }
//         buffer += line.slice(1).trim();
//         isHeader = true;
//       } else if (line.startsWith('>')) {
//         if (buffer) {
//           elements.push(
//             isHeader ? (
//               <h3 key={elements.length}>{buffer.trim()}</h3>
//             ) : (
//               <p className="post-body" key={elements.length}>
//                 {buffer.trim()}
//               </p>
//             )
//           );
//           buffer = '';
//         }
//         buffer += line.slice(1).trim();
//         isHeader = false;
//       } else {
//         buffer += ` ${line.trim()}`;
//       }
  
//       if (index === lines.length - 1 && buffer) {
//         elements.push(
//           isHeader ? (
//             <h3 key={elements.length}>{buffer.trim()}</h3>
//           ) : (
//             <p className="post-body" key={elements.length}>
//               {buffer.trim()}
//             </p>
//           )
//         );
//       }
//     });
  
//     return elements;
//   };
    
const Posts: React.FC = () => {
  const [postsArry, setPosts] = useState<PostProps[] | null>(null);

  const showPosts = () => {
    const link = 'https://mica-soft-makeup.glitch.me';
    fetch(`${link}/api/showposts`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    showPosts();
  }, []);

  return (
    <div className="Post-container">
      {postsArry?.map((post, index) => (
        <article className="Post-element" key={index}>
          <div className="post-head">
          <h1 className="post-title">{post.title}</h1>
          <div className="info-post-owner">
            <span><RxAvatar />{post.owner}</span>
            <span><FaClock />{post.date}</span>
            <span><MdCategory />{post.category}</span>
          </div>            
          
          </div>

          {/* <div>{renderContent(post.post)}</div> */}
        
        
        <div className="content">

        
          <p className="post-body">
            {(post.post).substring(0, 400)}{post.post.length >= 400 && ' ...'}
          </p>
          
          </div>
          <div className="post-footer">
            <samp>მეტის ნახვა</samp>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Posts;
