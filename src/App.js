import './App.css';
import AllArticles from './components/AllArticles';
import Header from './components/Header';
import SingleArticle from './components/SingleArticle';
import { Router } from '@reach/router';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <AllArticles path="/" />
        <SingleArticle path="/articles/:article_id" />
        <Profile path="/profile" />
      </Router>
    </div>
  );
}

export default App;
