import React from 'react';

import { getArticles } from '../api';

import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    getArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) {
      return (
        <>
          <div class="loader"></div>
          <h2>Loading articles...</h2>
        </>
      );
    }
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
