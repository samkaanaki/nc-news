import React from 'react';
import { Link } from '@reach/router';
import { getArticles } from '../api';
import { Router } from '@reach/router';
import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    getArticles().then((articles) => {
      console.log(articles);
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) {
      return <h2>Sit tight. Loading articles...</h2>;
    }
    return (
      <div className="all-articles">
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
