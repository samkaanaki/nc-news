import React from 'react';
import { getArticleComments, postComment } from '../api';
import CommentCard from '../components/CommentCard';
import Comment from '../components/Comment';

class ArticleComments extends React.Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    getArticleComments(this.props.article_id).then(({ comments }) => {
      this.setState({ comments, isLoading: false });
    });
  }

  addComment = (commentToAdd) => {
    // postComment(this.props.article_id, this.props.comment).then();
    this.setState((currState) => {
      console.log(currState);
      return {
        comments: [commentToAdd, ...currState.comments]
      };
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <div className="loader">
            {' '}
            <h2>Loading comments...</h2>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Comment
            article_id={this.props.article_id}
            addComment={this.addComment}
          />
          <ul className="article-comments-container">
            {this.state.comments.map((comment) => {
              return <CommentCard key={comment.comment_id} {...comment} />;
            })}
          </ul>
        </>
      );
    }
  }
}

export default ArticleComments;
