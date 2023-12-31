import Square from "./Square";

function Board({ xIsNext, squares, onPlay }) {
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const winner = lines
      .filter(
        ([a, b, c]) =>
          squares[a] && squares[a] === squares[b] && squares[b] === squares[c]
      )
      .map(([a]) => squares[a])[0];
    return winner || (squares.every((square) => square) ? "draw" : "");
  }

  const winner = calculateWinner(squares);
  let currentPlayer = xIsNext ? "X" : "O";
  let status = winner
    ? winner === "draw"
      ? "It's a draw!"
      : `Winner : ${winner}`
    : `Your turn, Player : ${currentPlayer}`;
  return (
    <>
      <h1>TIC TAC TOE</h1>
      <div className="platform">
        <div className="board">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <h2 className="status">{status}</h2>
    </>
  );
}

export default Board;
