import React from 'react';
import { postComment } from '../api';

class Comment extends React.Component {
  state = {
    success: '',
    comment: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { success, comment } = this.state;
    const { article_id } = this.props;
    postComment(article_id, comment);
  };

  handleChange = ({ target }) => {
    console.log(target);
    this.setState(() => {
      return {};
    });
  };

  render() {
    return (
      <>
        <div className="comment-container">
          <h3>Join the conversation</h3>
          <p>Commenting as samaki_8</p>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <input
              required
              type="text"
              id="comment-input"
              placeholder="Let OP know how much you hate them here"
              value={this.state.comment}
            />
            <button id="post-button" type="submit">
              Post
            </button>
          </form>
          {this.state.success === 'yes' ? (
            <p>Successfully posted ✅</p>
          ) : this.state.success === 'no' ? (
            <p>Unable to post ❌</p>
          ) : null}
        </div>
      </>
    );
  }
}

export default Comment;
