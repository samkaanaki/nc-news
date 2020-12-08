import './App.css';
import AllArticles from './components/AllArticles';

function App() {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <img
            src="https://i.imgur.com/ws2kAA0.png"
            alt="logo"
            id="header-logo"
          />{' '}
          <h1>spread-it</h1>
          <p id="waste-time">a massive waste of time</p>
          <p id="welcome-user">Welcome back samaki_69420</p>
          <img
            src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c531.png"
            alt="user logo"
            id="user-logo"
          />
        </div>

        <hr />
      </header>{' '}
      <AllArticles />
    </>
  );
}

export default App;
