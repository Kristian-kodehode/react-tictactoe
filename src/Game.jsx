import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };
  function jumpTo(nextMove) {
    //TODO
  }

  const moves = history.map((squares, move) => {
    let description;
    description = move > 0 ? `Go to move # ${move}` : `Go to game start`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;

/*
Showing past moves er neste steg i tutorial.






*/
