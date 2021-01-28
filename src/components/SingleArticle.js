import React from 'react';
import { getSingleArticle } from '../api';
import axios from 'axios';

import ArticleComments from '../components/ArticleComments';
import { timeFormatter } from '../timeFormatter';

class SingleArticle extends React.Component {
  state = {
    isLoading: true,
    article: {}
  };

  componentDidMount() {
    getSingleArticle(this.props.article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  increaseArticleVote = (article_id) => {
    this.upvoteArticle();
    axios.patch(
      `https://nc-news-for-frontend.herokuapp.com/api/articles/${this.props.article_id}`,
      {
        inc_votes: 1
      }
    );
  };

  decreaseArticleVote = (article_id) => {
    this.upvoteArticle();
    axios.patch(
      `https://nc-news-for-frontend.herokuapp.com/api/articles/${this.props.article_id}`,
      {
        inc_votes: 1
      }
    );
  };

  upvoteArticle = () => {
    this.setState((currentState) => {
      const newState = {
        article: {
          ...currentState.article,
          votes: currentState.article.votes + 1
        }
      };

      return newState;
    });
  };

  downvoteArticle = () => {
    this.setState((currentState) => {
      const newState = {
        article: {
          ...currentState.article,
          votes: currentState.article.votes - 1
        }
      };

      return newState;
    });
  };

  render() {
    console.log(this.state);
    if (this.state.isLoading) {
      return (
        <>
          <h2>Loading article...</h2>
        </>
      );
    } else {
      const {
        title,
        topic,
        author,
        votes,
        comment_count,
        body,
        created_at,
        article_id
      } = this.state.article;

      return (
        <>
          <div className="single-article-container">
            <div className="votes">
              <button id="-article-vote-up" onClick={this.increaseArticleVote}>
                ⬆
              </button>
              <p id="current-votes">{votes}</p>
              <button id="article-vote-down" onClick={this.decreaseArticleVote}>
                ⬇
              </button>
            </div>
            <br></br>
            <h3>{title}</h3>

            <p className="single-article-info">
              in <u>spr/{topic}</u> by <u>u/{author}</u> on
              <u>{timeFormatter(created_at)}</u>
            </p>
            <br></br>
            <p>{body}</p>
            <br></br>

            <div className="article-comments">
              <img
                src="https://assets.dryicons.com/uploads/icon/svg/6145/0beebf51-beba-482d-a5cf-e1b7039ffec6.svg"
                alt="comments logo"
                id="comment-bubble"
              />
              {comment_count}
            </div>
          </div>
          <br></br>

          <ArticleComments article_id={article_id} />
        </>
      );
    }
  }
}

export default SingleArticle;
