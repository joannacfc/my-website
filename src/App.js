import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import Menu from './Menu';
import About from './About';
import Resume from './Resume';
import MainPage from './MainPage';
import Portfolio1 from './Portfolio1';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Menu />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio1" element={<Portfolio1 />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
      </div>
    </Router>
  );
}

export default App;
