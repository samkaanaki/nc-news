import React from 'react';

class Comment extends React.Component {
  state = {
    comment: ''
  };
  render() {
    return (
      <>
        <div className="comment-container">
          <h3>Join the conversation</h3>
          <p>Commenting as samaki_8</p>
          <br></br>
          <form>
            <input
              required
              type="search"
              id="comment-input"
              placeholder="Let OP know how much you hate them here"
            />
          </form>
          <button id="post-button">Post</button>
        </div>
      </>
    );
  }
}

export default Comment;
