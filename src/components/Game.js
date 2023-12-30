import React, { useState, useEffect } from "react";
import Square from "./Square";
import WinnerModal from "./WinnerModal";
import TieModal from "./TieModal";
import { useLocation } from "react-router-dom";

const Game = () => {
  const location = useLocation();
  const { playerName, selectedMarker } = location.state || {};
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(selectedMarker === "X");
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [showTieModal, setShowTieModal] = useState(false);
  const [winner, setWinner] = useState(null);

  const toggleWinnerModal = () => {
    setShowWinnerModal(!showWinnerModal);
  };

  const toggleTieModal = () => {
    setShowTieModal(!showTieModal);
  };

  useEffect(() => {
    if (!isXTurn) {
      const timer = setTimeout(() => {
        const computerMove = getComputerMove(squares);
        handleClick(computerMove);
      }, Math.floor(Math.random() * 1000) + 1000);

      return () => clearTimeout(timer);
    }
  }, [isXTurn, squares]);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares) || isBoardFull(squares)) {
      return;
    }

    const updatedSquares = [...squares];
    updatedSquares[index] = isXTurn ? selectedMarker : "O";
    setSquares(updatedSquares);
    setIsXTurn(!isXTurn);

    const currentWinner = calculateWinner(updatedSquares);
    if (currentWinner) {
      setWinner(currentWinner);
      setShowWinnerModal(true);
    } else if (isBoardFull(updatedSquares)) {
      setShowTieModal(true);
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
    setShowWinnerModal(false);
    setShowTieModal(false);
    setWinner(null);
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

  const getComputerMove = (squares) => {
    const emptySquares = squares.reduce((acc, value, index) => {
      if (!value) {
        acc.push(index);
      }
      return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    return emptySquares[randomIndex];
  };

  return (
    <div className="background">
      <div className="game-container">
        <h1 className="title">Tic Tac Toe</h1>
        <div className="turn">
          <p>{`Player ${
            isXTurn ? playerName || selectedMarker : "Computer"
          }'s turn`}</p>
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
          playerName={playerName}
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
    </div>
  );
};

export default Game;