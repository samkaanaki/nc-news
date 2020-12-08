import React from 'react';

const CommentCard = (props) => {
  const { author, body, created_at, votes } = props;
  return (
    <>
      <div id="comment-card"></div>
      <p>
        <u>u/{author}</u> at {created_at}
      </p>
      <p>{body}</p>
      <p>{votes} votes</p>
    </>
  );
};

export default CommentCard;
