import React from 'react';
import { Link } from '@reach/router';
import { timeFormatter } from '../timeFormatter';

const ArticleCard = (props) => {
  const {
    title,
    author,
    comment_count,
    topic,
    votes,
    article_id,
    created_at
  } = props;

  return (
    <div className="article-card">
      <li>
        <Link to={`/articles/${article_id}`}>
          <h3>{title}</h3>
        </Link>
        <p className="article-card-info">
          in <u>spr/{topic}</u> by <u>u/{author}</u> on <u></u>
          {timeFormatter(created_at)}
        </p>
        <p>votes: {votes}</p>
        <p>comments: {comment_count}</p>
      </li>
    </div>
  );
};

export default ArticleCard;
