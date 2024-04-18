import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import Menu from './Menu';
import About from './About';
import Resume from './Resume';
import MainPage from './MainPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Menu />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<MainPage />} /> {/* Route for the main page */}
          </Routes>
          <Link to="/"> {/* Link to the main page */}
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
      </div>
    </Router>
  );
}

export default App;