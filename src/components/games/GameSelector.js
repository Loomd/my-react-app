import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../common/Navigation';
import Minesweeper from './Minesweeper';
import GamesContainer from './GamesContainer';

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
      <GamesContainer>
        {renderGame()}
      </GamesContainer>
    </div>
  );
}

export default GameSelector;
