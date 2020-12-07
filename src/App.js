import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header>
      <div className="header-left">
        <img
          src="https://i.imgur.com/ws2kAA0.png"
          alt="logo"
          id="logo-header"
        />{' '}
        <h1>spread-it</h1>
        <p id="interwebs">the front page of the interwebs</p>
      </div>
      <div className="header-right"></div>
    </header>
  );
}

export default App;
