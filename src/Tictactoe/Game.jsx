import React, { useState } from 'react'
import "../Tictactoe/game.css"

const Game = () => {
    let [squares,setSquares] = useState(Array(9).fill(null));
    let [xIsNext,setXIsNext] = useState(true);
    let [winner,setWinner] = useState(null);


    let handleClick = (i) => {
        const newSquares = squares.slice();
        if(winner || newSquares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);

        const gameWinner = calculateWinner(newSquares);
        if(gameWinner) {
            setWinner(gameWinner);
        } else if(!newSquares.includes(null)) {
            setWinner('No one');
        }
    };

    let requireSquare = (i)=> {
        return (
            <button className="squares" onClick={()=>{handleClick(i)}}>
                {squares[i]}
            </button>
        );
    };
    let status;
    if(winner) {
        status = winner === 'No one' ? `No one won the game. Restarting...` : `Congractulations! ${winner} won the game!`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    let restartGame = ()=> {
        setSquares(Array(9).fill(null));
        setWinner(null);
        setXIsNext(true);
    }
  return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
            {requireSquare(0)}
            {requireSquare(1)}
            {requireSquare(2)}
        </div>
        <div className="board-row">
            {requireSquare(3)}
            {requireSquare(4)}
            {requireSquare(5)}
        </div>
        <div className="board-row">
            {requireSquare(6)}
            {requireSquare(7)}
            {requireSquare(8)}
        </div>
        <div>
            <button className="restart-btn" onClick={restartGame}>
                Restart 
            </button>
        </div>
    </div>
  )
}

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
    // Check all possible winning combinations
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // If all three squares in a row have the same value (X or O), return the winner
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    // If no winner is found, return null
    return null;
  };  


export default Game