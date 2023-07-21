/*
import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => jumpTo(0)}>Reset Game</button>
      </div>
    </div>
  );
};

export default Game;
*/

import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [currentSquares, setCurrentSquares] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares) => {
    setCurrentSquares(nextSquares);
    setCurrentMove(currentMove + 1);
  };

  const resetGame = () => {
    setCurrentSquares(Array(9).fill(null));
    setCurrentMove(0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default Game;
