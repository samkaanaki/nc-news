import React from 'react';
import { getSingleArticle } from '../api';

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
      return <p>Loading article...</p>;
    } else {
      const {
        title,
        topic,
        author,
        votes,
        comment_count,
        body
      } = this.state.article.article;
      return (
        <div className="single-article-container">
          <div className="single-article-content">
            <h3>{title}</h3>
            <p>spr/{topic}</p>
            <p>by {author}</p>
            <p>{votes} votes</p>
            <p>{comment_count} comments</p>
            <p>{body}</p>
          </div>
        </div>
      );
    }
  }
}

export default SingleArticle;
