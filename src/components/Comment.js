import React from 'react';
import { postComment } from '../api';

class Comment extends React.Component {
  state = {
    success: '',
    comment: ''
  };
  render() {
    return (
      <>
        <div className="comment-container">
          <h3>Join the conversation</h3>
          <p>Commenting as samaki_8</p>
          <br></br>
          <form onSubmit={postComment}>
            <input
              required
              type="text"
              id="comment-input"
              placeholder="Let OP know how much you hate them here"
            />
            <button id="post-button" type="submit">
              Post
            </button>
          </form>
          {this.state.success === 'yes' ? (
            <p>Successfully added ✅</p>
          ) : this.state.success === 'no' ? (
            <p>Invalid request ❌</p>
          ) : null}
        </div>
      </>
    );
  }
}

export default Comment;
