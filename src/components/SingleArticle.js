import React from 'react';
import { getSingleArticle } from '../api';
import Comment from '../components/Comment';

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
        body,
        created_at
      } = this.state.article.article;
      return (
        <>
          <div className="single-article-container">
            <div className="single-article-content">
              <h3>{title}</h3>
              <p>
                in spr/{topic} by u/{author} on {created_at}
              </p>
              <br></br>
              <p>{body}</p>
              <br></br>
              <p>
                {votes} votes || {comment_count} comments
              </p>
            </div>
          </div>
          <br></br>
          <Comment />
        </>
      );
    }
  }
}

export default SingleArticle;
