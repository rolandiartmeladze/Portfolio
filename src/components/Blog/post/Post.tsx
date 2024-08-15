import React, { useEffect, useState } from "react";
import '../Post.css';
import { RxAvatar } from "react-icons/rx";
import { FaClock, FaComment, FaRegEye, FaShare } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import Comment from "../addComment/Comment";
import { formatTimestamp } from "../../Tools/Tools";

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
  comments: any;
}

interface CommnetProps{
  name: string;
  comment:string

}
interface Props{
    selectedPost: number;
}



const API_Request = async ({ selectedPost }: Props): Promise<PostProps | null> => {
  const response = await fetch('http://127.0.0.1:8000/api/posts/');
  const data: PostProps[] = await response.json();

  return data.find(post => post.post_id === selectedPost) || null;
};



const PostComponent: React.FC<{ selectedPost: number }> = ({ selectedPost }) => {

  const [comments, setComments] = useState<CommnetProps[] | null>(null)
  const [post, setPost] = useState<PostProps | null>(null);

    useEffect(() => {
      const fetchRequest = async () => {
        const result = await API_Request({ selectedPost });
        setComments(result?.comments)
        setPost(result); 
      };

      fetchRequest();

      console.log(selectedPost);
    }, [selectedPost]);

  return (

    <section className="Blog-container">
    <div className="Post-container">
      {post && 
        <article className="Post-element View_post" key={post.post_id}>
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
              {post.post}
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
      }
    </div>

{comments && <Comment comments={comments} selectedPost={selectedPost}  /> }
    
    </section>
  );
};

export default PostComponent;
