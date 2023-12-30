import React, { useState } from 'react';
import Square from './components/Square';
import WinnerModal from './components/WinnerModal';
import TieModal from './components/TieModal';
import './App.css';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [showTieModal, setShowTieModal] = useState(false);
  const [winner, setWinner] = useState(null);
  const [currentTurn, setCurrentTurn] = useState('X'); // Add turn state

  const toggleWinnerModal = () => {
    setShowWinnerModal(!showWinnerModal);
  };

  const toggleTieModal = () => {
    setShowTieModal(!showTieModal);
  };

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const updatedSquares = [...squares];
    updatedSquares[index] = isXTurn ? 'X' : 'O';
    setSquares(updatedSquares);
    setIsXTurn(!isXTurn);

    const currentWinner = calculateWinner(updatedSquares);
    if (currentWinner) {
      setWinner(currentWinner);
      setShowWinnerModal(true);
    } else if (isBoardFull(updatedSquares)) {
      setShowTieModal(true);
    }

    // Toggle current turn for notification
    setCurrentTurn((prevTurn) => (prevTurn === 'X' ? 'O' : 'X'));
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
    setShowWinnerModal(false);
    setShowTieModal(false);
    setWinner(null);
    setCurrentTurn('X');
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

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const isBoardFull = (squares) => {
    return squares.every((square) => square !== null);
  };

  return (
    <div className="background">
      <h1 className="title">Tic Tac Toe</h1>
      <div className='turn'>
        <p>{`Player ${currentTurn}'s turn`}</p>
      </div>
      <div className="board">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="button" onClick={resetGame}>
        Reset Game
      </div>
      <WinnerModal
        winner={winner}
        showWinnerModal={showWinnerModal}
        resetGame={resetGame}
        toggle={toggleWinnerModal}
      />
      <TieModal
        showTieModal={showTieModal}
        resetGame={resetGame}
        toggle={toggleTieModal}
      />
    </div>
  );
};

export default App;
