import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../styles/Games.css';

function Games() {
  return (
    <div className="page-container">
      <Navigation />
      <div className="games-content">
        <h1>Games</h1>
        <ul className="games-list">
          <li>
            <Link to="/games/minesweeper">Minesweeper</Link>
          </li>
          {/* Add more game links here as you develop them */}
        </ul>
      </div>
    </div>
  );
}

export default Games;
