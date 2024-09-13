import React from 'react';
import { useParams } from 'react-router-dom';
import Minesweeper from './Minesweeper';
import Navigation from './Navigation';

function GameSelector() {
  const { gameName } = useParams();

  const renderGame = () => {
    switch (gameName) {
      case 'minesweeper':
        return <Minesweeper />;
      // Add cases for other games as you develop them
      default:
        return <h2>Game not found</h2>;
    }
  };

  return (
    <div className="page-container">
      <Navigation />
      <div className="game-content">
        {renderGame()}
      </div>
    </div>
  );
}

export default GameSelector;
