import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header>
      <div className="header-left">
        <img
          src="https://i.imgur.com/ws2kAA0.png"
          alt="logo"
          id="header-logo"
        />{' '}
        <h1>shred-it</h1>
        <p id="waste-time">waste lots of time, then feel guilty</p>
        <div className="header-right">
          <p id="welcome-user">Welcome back samaki</p>
          {/* <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c531.png"
            alt="user logo"
          /> */}
        </div>
      </div>
      <hr />
    </header>
  );
}

export default App;
