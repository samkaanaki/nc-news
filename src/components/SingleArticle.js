import React from 'react';
import { getSingleArticle } from '../api';
import Comment from '../components/Comment';
import ArticleComments from '../components/ArticleComments';

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
      return <h2>Loading article...</h2>;
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
            <div className="single-article-content">
              <h3>{title}</h3>
              <p>
                in <u>spr/{topic}</u> by <u>u/{author}</u> on {created_at}
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

          <ArticleComments article_id={article_id} />
        </>
      );
    }
  }
}

export default SingleArticle;
