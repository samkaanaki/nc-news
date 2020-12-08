import React from 'react';
import { Link } from '@reach/router';
import { Router } from '@reach/router';
import SingleArticle from '../components/SingleArticle';

const ArticleCard = (props) => {
  const { title, author, comment_count, topic, votes, article_id } = props;
  console.log(props);
  return (
    <div className="article-card">
      <li>
        <Link to={`/articles/${article_id}`}>
          <h3>{title}</h3>
        </Link>

        <p>{author}</p>
        <p>{topic}</p>
        <p>votes: {votes}</p>
        <p>comments: {comment_count}</p>
      </li>
    </div>
  );
};

export default ArticleCard;
