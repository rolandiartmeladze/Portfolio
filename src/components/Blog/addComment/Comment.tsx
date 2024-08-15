import React, { useState } from "react";

interface CommentP {
  name: string;
  comment: string;
}

interface CommentProps {
  comments: any;
  selectedPost:number;
}

const CommentComponent = ({ comments, selectedPost }: CommentProps) => {

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
        <input type="text" placeholder="you name" onChange={(e)=>{setName(e.target.value)}} />

        <textarea name="New Comment" id="" placeholder="Write you coomment"  onChange={(e)=>{setNewComment(e.target.value)}} ></textarea>
        <samp onClick={addComment}>Add Comment</samp>
      </form>
      <h6 style={{display: 'flex', justifyContent: 'flex-start'}}>Comments:</h6>

      {comments.map((comment:CommentP, index: number) => (
        <div key={index} className="comment-item">
          <label htmlFor="author">Author:</label> {comment.name}
          <label htmlFor="comment">{'>'}</label> {comment.comment}
        </div>
      ))}
    </div>
  );
};

export default CommentComponent;
