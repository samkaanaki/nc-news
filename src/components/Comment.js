import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment-container">
        <h3>Join the conversation</h3>
        <p>Commenting as samaki_8</p>
        <br></br>
        <form>
          <input
            required
            type="search"
            id="comment-input"
            placeholder="What are your thoughts?"
          />
        </form>
        <button>Post</button>
      </div>
    );
  }
}

export default Comment;
