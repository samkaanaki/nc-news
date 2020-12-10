import React from 'react';
import Nav from '../components/Nav';
import axios from 'axios';

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

  updateTopic = (event) => {
    const { value } = event.target;
    console.log(value);
    this.fetchArticlesByTopic(value).then((response) => {});
  };

  fetchArticlesByTopic = (topic) => {
    return axios
      .get(`https://nc-news-for-frontend.herokuapp.com/api/articles/`, {
        params: {
          topic
        }
      })
      .then((response) => {
        this.setState({ articles: response.data.articles });
        console.log(this.state);
      });
  };

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) {
      return (
        <>
          <div class="loader">
            <h2>Loading articles...</h2>
          </div>
        </>
      );
    }
    return (
      <>
        <Nav updateTopic={this.updateTopic} />
        <div className="all-articles-container">
          <div className="all-articles">
            <h2>All articles</h2>
            <ul>
              {articles.map((article) => {
                return <ArticleCard key={article.article_id} {...article} />;
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ArticlesList;
