import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div className="full-header">
      <header className="header">
        <div className="header-left">
          <Link to={'/'}>
            <img
              src="https://i.imgur.com/ws2kAA0.png"
              alt="logo"
              id="header-logo"
            />
          </Link>
          <hr />
          <h1>spread-it</h1>
          <hr></hr>
          <p id="waste-time">waste your life away</p>
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
            <p id="welcome-user">jessjelly</p>

            <p id="karma">💥 8 karma</p>
          </div>
          <hr></hr>
          <Link to="/profile">
            <img
              src="https://toppng.com/uploads/preview/txt-at-master-reddit-star-wars-logo-11563175008hvulwgytoc.png"
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
