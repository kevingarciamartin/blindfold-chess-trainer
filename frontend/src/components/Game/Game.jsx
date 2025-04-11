import { useState, useEffect } from "react";
import { stringOuterProduct } from "../../utils/utils";
import Chessboard from "../Chessboard/Chessboard";

export default function Game() {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [targetCoordinate, setTargetCoordinate] = useState("");
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [clickedSquare, setClickedSquare] = useState(null);
  const [isCorrectClick, setIsCorrectClick] = useState(null);

  const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const coordinates = stringOuterProduct(rows, columns);

  // Start game
  useEffect(() => {
    if (round <= 10 && isPlaying) {
      setTargetCoordinate(
        coordinates[Math.floor(Math.random() * coordinates.length)]
      );
      setIsRunning(true);
    } else {
      setScore(0);
      setRound(1);
      setTimer(0);
      setIsRunning(false);
    }
  }, [isPlaying, round]);

  // Timer logic
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleSquareClick = (clickedCoordinate) => {
    setClickedSquare(clickedCoordinate);

    if (clickedCoordinate === targetCoordinate) {
      setScore((prevScore) => prevScore + 1);
      setIsCorrectClick(true);
    } else {
      setIsCorrectClick(false);
    }

    // Wait briefly before advancing to the next round
    setTimeout(() => {
      setClickedSquare(null);
      setIsCorrectClick(null);
      round < 10
        ? setRound(round + 1)
        : handleGameOver(
            score + (clickedCoordinate === targetCoordinate ? 1 : 0)
          );
    }, 500);
  };

  const handleGameOver = async (finalScore) => {
    setIsPlaying(false);

    const name = prompt(
      `Game over! Score: ${finalScore}, Time: ${timer} seconds.\nEnter your name to save your highscore:`
    );

    if (name) {
      try {
        const response = await fetch("api/highscores", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: name,
            score: finalScore,
            time: timer,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to save highscore");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while saving your highscore.");
      }
    } else {
      alert("Highscore not saved.");
    }
  };

  if (!isPlaying) {
    return <button onClick={() => setIsPlaying(true)}>Play</button>;
  }

  return (
    <div className="game">
      <h3>Round {round}/10</h3>
      <p>
        Click on: <strong>{targetCoordinate}</strong>
      </p>
      <p>Score: {score}</p>
      <p>Timer: {timer}s</p>
      <Chessboard
        onSquareClick={handleSquareClick}
        clickedSquare={clickedSquare}
        isCorrectClick={isCorrectClick}
      />
    </div>
  );
}
