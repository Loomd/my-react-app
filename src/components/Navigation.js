import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (path) => {
    setMenuOpen(false);
    if (path) {
      navigate(path);
    }
  };

  return (
    <header>
      <button className="menu-toggle" onClick={toggleMenu} aria-expanded={menuOpen} aria-controls="main-nav">
        <span className="sr-only">Toggle menu</span>
        <span className="hamburger"></span>
      </button>
      <nav id="main-nav" className={`nav-bar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><button onClick={() => handleNavClick('/')}>Home</button></li>
          <li><button onClick={() => handleNavClick('/projects')}>Projects</button></li>
          <li><button onClick={() => handleNavClick()}>Games</button></li>
          <li><button onClick={() => handleNavClick()}>Filler</button></li>
          <li><button onClick={() => handleNavClick()}>Filler</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
