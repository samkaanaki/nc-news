import React from 'react';
import { getArticleComments } from '../api';
import CommentCard from '../components/CommentCard';

class ArticleComments extends React.Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    getArticleComments(this.props.article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading comments...</p>;
    } else {
      return (
        <ul className="article-comments-container">
          {this.state.comments.comments.map((comment) => {
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
        </ul>
      );
    }
  }
}

export default ArticleComments;
