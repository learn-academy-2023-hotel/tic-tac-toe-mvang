import React, { useState, useEffect } from "react";
import Square from "./Square";
import WinnerModal from "./WinnerModal";
import TieModal from "./TieModal";
import { useLocation } from "react-router-dom";

const Game = () => {
  const location = useLocation();
  const playerName = location?.state?.playerName || "";
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [showTieModal, setShowTieModal] = useState(false);
  const [winner, setWinner] = useState(null);

  const toggleWinnerModal = () => {
    setShowWinnerModal(!showWinnerModal);
  };

  const toggleTieModal = () => {
    setShowTieModal(!showTieModal);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (!isXTurn) {
        const timer = setTimeout(() => {
            const computerMove = getComputerMove(squares);
            handleClick(computerMove);
        }, Math.floor(Math.random() * 1000) + 1000);

        return () => clearTimeout(timer);
    } else {
        const currentWinner = calculateWinner(squares);
        if (currentWinner) {
            setWinner(currentWinner);
            setShowWinnerModal(true);
        } else if (isBoardFull(squares)) {
            setShowTieModal(true);
        }
    }
}, [isXTurn, squares]);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares) || isBoardFull(squares)) {
      return;
    }

    const updatedSquares = [...squares];
    updatedSquares[index] = isXTurn ? "X" : "O";
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
      <h1 className="title">Tic Tac Toe</h1>
      <div className="turn">
        <p>{`Player ${isXTurn ? playerName || "X" : "Computer"}'s turn`}</p>
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
  );
};

export default Game;
