import React from 'react';
import { timeFormatter } from '../timeFormatter';

const CommentCard = (props) => {
  const { author, body, created_at, votes } = props;
  return (
    <>
      <div id="comment-card"></div>
      <p className="comment-info">
        <u>u/{author}</u> at <u>{timeFormatter(created_at)}</u>
      </p>
      <p>{body}</p>
      <p className="comment-votes">
        <img
          src="https://www.pinclipart.com/picdir/big/194-1949141_arrow-arrows-direction-down-download-guidance-up-down.png"
          alt="up and down arrows"
          id="up-down-arrows"
        />
        {votes} votes
      </p>
    </>
  );
};

export default CommentCard;
