import React from "react";

interface CommentP {
  name: string;
  comment: string;
}

interface CommentProps {
  comments: any;
}

const CommentComponent = ({ comments }: CommentProps) => {
  return (
    <div className="comment-block">
      <h6>This is a comment section:</h6>

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
