import React from 'react';
import { Link } from 'react-router-dom';
import './modules/headerFooter.css';


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
