import React, { useState } from "react";
import { API_Request } from "../post/Post";
import { formatTimestamp } from "../../Tools/Tools"

import { RxAvatar } from "react-icons/rx";
import { FaClock } from "react-icons/fa";


interface CommentP {
  name: string;
  comment: string;
  created_at: string;
}

interface CommentProps {
  comments: any;
  setComments:Function;
  selectedPost:number;
}

const CommentComponent = ({ comments, setComments, selectedPost }: CommentProps) => {

  const [name, setName] = useState<string>();
  const [newComment, setNewComment] = useState<string>();

  const addComment = async ()=>{
     try {    
          
          
          const comment = {
        'post': selectedPost,
        'name': name,
        'comment': newComment,  
      }

          const response = await fetch('http://127.0.0.1:8000/api/comments/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment),
          });
    
          if (response.ok) {
            console.log('working')

              const result = await API_Request({ selectedPost });
              setComments(result?.comments)
              setNewComment('');
              setName('');

          } else {
            console.error('Error creating comment:', response.statusText);
          }
        } catch (error) {
          console.error('Error creating comment:', error);
        }
    





      // return comment;
  }
  return (
    <div className="comment-block">
      <form className="comment-form">
        <h1>Write New Comment</h1>
        <input type="text" placeholder="you name" value={name} onChange={(e)=>{setName(e.target.value)}} />

        <textarea name="New Comment" id="" placeholder="Write you coomment" value={newComment} onChange={(e)=>{setNewComment(e.target.value)}} ></textarea>
        <div className="addcomment-btn" onClick={addComment}>Add Comment</div>
      </form>
      <div className="comments-cont">


      {comments.map((comment:CommentP, index: number) => (
        <div key={index} className="comment-item">
        <ul>
          <li><RxAvatar /> {comment.name}</li>
          <li><FaClock /> {formatTimestamp(comment.created_at)}</li>
        </ul>
          <p>          
           {comment.comment}
            </p>
        </div>
      ))}
            <h6 style={{display: 'flex', justifyContent: 'flex-start'}}>Comments:</h6>
      </div>

    </div>
  );
};

export default CommentComponent;
