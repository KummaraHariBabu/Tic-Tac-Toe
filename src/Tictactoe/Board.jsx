import React, { useState } from 'react';
import '../Tictactoe/Board.css';


const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
  
    const handleClick = (i) => {
      const newSquares = squares.slice();
      if (winner || newSquares[i]) {
        return;
      }
      newSquares[i] = xIsNext ? 'X' : 'O';
      setSquares(newSquares);
      setXIsNext(!xIsNext);
      const gameWinner = calculateWinner(newSquares);
      if (gameWinner) {
        setWinner(gameWinner);
      } else if (!newSquares.includes(null)) {
        setWinner('No one');
      }
    };
  
    const renderSquare = (i) => {
      return (
        <button className="square" onClick={() => handleClick(i)}>
          {squares[i]}
        </button>
      );
    };
  
    const resetGame = () => {
      setSquares(Array(9).fill(null));
      setWinner(null);
      setXIsNext(true);
    };
  
    let status;
    if (winner) {
      status = winner === 'No one' ? `No one won the game. Restarting...` : `Congratulations! ${winner} won the game!`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  
    return (
      <div className='main-board'>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>

        {/* this code is directly displaying along with the board */}
        <div>
            <button className='restart-btn' onClick={resetGame}>Restart Game</button>
        </div>

        {/* this code for when no one won the game that time this button will display for restart the game */}
        {/* {winner && (
          <div>
            <button className='restart-btn' onClick={resetGame}>Restart Game</button>
          </div>
        )} */}
      </div>
    );
  };
  
  const calculateWinner = (squares) => {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  export default Board;