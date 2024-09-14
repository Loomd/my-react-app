import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Navigation.css';

function Navigation() {
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false);

  const toggleGamesDropdown = () => {
    setIsGamesDropdownOpen(!isGamesDropdownOpen);
  };

  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li className="dropdown">
          <button onClick={toggleGamesDropdown} className="dropdown-toggle">
            Games {isGamesDropdownOpen ? '▲' : '▼'}
          </button>
          {isGamesDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/games">All Games</Link></li>
              <li><Link to="/games/minesweeper">Minesweeper</Link></li>
              {/* Add more game links here as needed */}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;