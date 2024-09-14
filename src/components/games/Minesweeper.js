import React, { useState, useEffect, useCallback } from 'react';
import '../../styles/components/Minesweeper.css';

const Minesweeper = () => {
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [mineCount] = useState(10);
  const rows = 9;
  const cols = 9;

  const initializeBoard = useCallback(() => {
    const newBoard = Array(rows)
      .fill()
      .map(() =>
        Array(cols).fill().map(() => ({
          isMine: false,
          isRevealed: false,
          neighborCount: 0,
        }))
      );

    // Place mines
    let minesPlaced = 0;
    while (minesPlaced < mineCount) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (!newBoard[row][col].isMine) {
        newBoard[row][col].isMine = true;
        minesPlaced++;
      }
    }

    // Calculate neighbor counts
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (!newBoard[i][j].isMine) {
          let count = 0;
          for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
              const ni = i + di;
              const nj = j + dj;
              if (
                ni >= 0 &&
                ni < rows &&
                nj >= 0 &&
                nj < cols &&
                newBoard[ni][nj].isMine
              ) {
                count++;
              }
            }
          }
          newBoard[i][j].neighborCount = count;
        }
      }
    }

    setBoard(newBoard);
    setGameOver(false);
  }, [mineCount, rows, cols]);

  useEffect(() => {
    initializeBoard();
  }, [initializeBoard]);

  const revealCell = (currentBoard, row, col) => {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      currentBoard[row][col].isRevealed
    )
      return;

    currentBoard[row][col].isRevealed = true;

    if (currentBoard[row][col].neighborCount === 0 && !currentBoard[row][col].isMine) {
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          if (di !== 0 || dj !== 0) {
            revealCell(currentBoard, row + di, col + dj);
          }
        }
      }
    }
  };

  const revealAllMines = (currentBoard) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (currentBoard[i][j].isMine) {
          currentBoard[i][j].isRevealed = true;
        }
      }
    }
  };

  const handleCellClick = (row, col) => {
    if (gameOver || board[row][col].isRevealed) return;

    const newBoard = board.map((currentRow) =>
      currentRow.map((cell) => ({ ...cell }))
    );

    if (newBoard[row][col].isMine) {
      setGameOver(true);
      revealAllMines(newBoard);
    } else {
      revealCell(newBoard, row, col);
    }

    setBoard(newBoard);
  };

  return (
    <div className="minesweeper">
      <h2>Minesweeper</h2>
      <div className="board">
        {board.map((currentRow, i) => (
          <div key={i} className="row">
            {currentRow.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`cell ${
                  cell.isRevealed ? 'revealed' : ''
                } ${cell.isMine && cell.isRevealed ? 'mine' : ''}`}
                onClick={() => handleCellClick(i, j)}
              >
                {cell.isRevealed && !cell.isMine && cell.neighborCount > 0
                  ? cell.neighborCount
                  : ''}
                {cell.isRevealed && cell.isMine ? '💣' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameOver && <div className="game-over">Game Over!</div>}
      <button onClick={initializeBoard}>New Game</button>
    </div>
  );
};

export default Minesweeper;
