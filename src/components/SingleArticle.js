import React from 'react';
import { getSingleArticle } from '../api';
import Comment from '../components/Comment';
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

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <div class="loader"></div>
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
      } = this.state.article.article;

      return (
        <>
          <div className="single-article-container">
            <div className="votes">
              <p id="vote-up">⬆</p>
              <p id="current-votes">{votes}</p>
              <p id="vote-down">⬇</p>
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
                src="http://clipart-library.com/new_gallery/169-1690372_comment-speech-bubble-clipart-png-download-black-comment.png"
                alt="comments logo"
                id="comment-bubble"
              />
              {comment_count}
            </div>
          </div>
          <br></br>
          <Comment article_id={article_id} />

          <ArticleComments article_id={article_id} />
        </>
      );
    }
  }
}

export default SingleArticle;
