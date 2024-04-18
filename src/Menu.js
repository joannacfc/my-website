import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Menu() {
  return (
    <div className="Menu">
      <header className="Menu-header">
        <div className="Menu-left">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Menu-right">
          <Link to="/about" className="Menu-link">About</Link>
          <Link to="/resume" className="Menu-link">Resume</Link>
        </div>
      </header>
    </div>
  );
}

export default Menu;