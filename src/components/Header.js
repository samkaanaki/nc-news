import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-left">
          <Link to={'/'}>
            <img
              src="https://i.imgur.com/ws2kAA0.png"
              alt="logo"
              id="header-logo"
            />
          </Link>
          <h1>spread-it</h1>
          <hr></hr>
          <p id="waste-time">a massive waste of time</p>
          <hr></hr>
          <div className="topics-filter">
            <select>
              <option>Choose a topic</option>
              <option>All</option>
              <option>Coding</option>
              <option>Cooking</option>
              <option>Football</option>
            </select>
          </div>
          <div className="header-user-info">
            <p id="welcome-user">samaki_8</p>
            <p id="karma">💥 8 karma</p>
          </div>
          <hr></hr>
          <Link to="/profile">
            <img
              src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c531.png"
              alt="user logo"
              id="user-logo"
            />
          </Link>
        </div>

        <hr />
      </header>{' '}
    </div>
  );
};

export default Header;
