import React, { useState } from 'react';

import './App.css';

function App() {
  const [board, setboard] = useState(["", "", "","", "", "","", "", "",]);
  const [turn, setTurn] = useState("X") ; 
  const handleClick = (index) => { 
    console.log(`givinig square ${index} value of ${turn}`);
    const newTurn = turn === "X" ? "O" : "X"; 
    setTurn(newTurn); 
    const newBoard = board; 
    newBoard[index] = turn; 
    setboard(board); 
  }

  const checkForWin = () => { 
   
  }
  return (
    <div className="App">
      <h1> Tic Tac Toe </h1>
      <div className="board">
        {board.map((square, index) => <div key={index} className="square" onClick={() => handleClick(index)}>{square}</div>)}
      </div> 
    </div>
  );
}

export default App;
