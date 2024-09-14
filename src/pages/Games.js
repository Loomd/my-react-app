import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import GamesContainer from '../components/games/GamesContainer';
import '../styles/pages/Games.css';
import HyperText from '../components/ui/HyperText';

function Games() {
  return (
    <div className="page-container">
      <Navigation />
      <GamesContainer>
        <HyperText text="Games" />
        <ul className="games-list">
          <li>
            <Link to="/games/minesweeper">Minesweeper</Link>
          </li>
          {/* Add more game links here as i
           develop them */}
        </ul>
      </GamesContainer>
    </div>
  );
}

export default Games;
