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

  // Handle square click
  const handleSquareClick = (clickedCoordinate) => {
    if (clickedCoordinate === targetCoordinate) setScore(score + 1);

    if (round < 10) {
      setRound(round + 1);
    } else {
      alert(`Game over! Score: ${score}, Time: ${timer} seconds`);
      setIsPlaying(false);
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
      <Chessboard onSquareClick={handleSquareClick} />
    </div>
  );
}
