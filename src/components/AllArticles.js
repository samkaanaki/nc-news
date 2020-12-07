import React from 'react';
import { Link } from '@reach/router';
import { getArticles } from '../api';
import { Router } from '@reach/router';
import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    getArticles().then((articles) => {
      console.log(articles);
      this.setState({ articles });
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="all-articles">
        <h2>All articles</h2>
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ArticlesList;
