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
    const { article_id, addComment } = this.props;
    postComment(article_id, comment)
      .then((response) => {
        if (response.status === 201) {
          this.setState({ success: 'yes', comment: '' });
          addComment(response.data.comment);
          setTimeout(() => {
            this.setState({ success: '' });
          }, 3000);
        }
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState(() => {
      return { comment: value };
    });
  };

  render() {
    return (
      <>
        <div className="comment-container">
          <h3>Join the conversation</h3>
          <p id="commenting-as">
            Commenting as <u>u/jessjelly</u>
          </p>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <textarea
              required
              type="text"
              id="comment-input"
              placeholder="Let OP know how much you hate them here"
              value={this.state.comment}
              onChange={this.handleChange}
            />
            <button id="post-button" type="submit">
              Post
            </button>
          </form>
          {this.state.success === 'yes' ? (
            <p>Successfully posted ✔️</p>
          ) : this.state.success === 'no' ? (
            <p>Unable to post ❌</p>
          ) : null}
        </div>
      </>
    );
  }
}

export default Comment;
