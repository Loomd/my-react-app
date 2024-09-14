import React from 'react';

function GamesContainer({ children }) {
  return (
    <div className="games-content">
      {children}
    </div>
  );
}

export default GamesContainer;
