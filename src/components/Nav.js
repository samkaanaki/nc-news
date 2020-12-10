import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="topics-filter">
        <select onChange={this.props.updateTopic} className="topics-dropdown">
          <option>Topics</option>
          <option value="">All</option>
          <option value="coding">Coding</option>
          <option value="cooking">Cooking</option>
          <option value="football">Football</option>
        </select>
      </nav>
    );
  }
}

export default Nav;
