import './App.css';
import AllArticles from './components/AllArticles';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AllArticles path="/articles" />
    </div>
  );
}

export default App;
