import React from 'react';

class Nav extends React.Component {
  // fetchArticlesByTopic = (topicValue) => {
  //   return axios
  //     .get(
  //       `https://nc-news-for-frontend.herokuapp.com/api/articles/?topic=${topicValue}`
  //     )
  //     .then((response) => {
  //       return response;
  //     });
  // };

  render() {
    return (
      <nav className="topics-filter">
        <select onChange={this.props.updateTopic}>
          <option>Choose a topic</option>
          <option>All</option>
          <option value="coding">Coding</option>
          <option value="cooking">Cooking</option>
          <option value="football">Football</option>
        </select>
      </nav>
    );
  }
}

export default Nav;
