import "./Game.css";
import { useState, useEffect } from "react";
import { useNotification } from "../../contexts/NotificationContext";
import { getCoordinates, formatTimer } from "../../utils/utils";
import Chessboard from "../Chessboard/Chessboard";
import Dialog from "../Dialog/Dialog";
import ClearableInput from "../ClearableInput/ClearableInput";

export default function Game() {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [targetCoordinate, setTargetCoordinate] = useState("");
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [clickedSquare, setClickedSquare] = useState(null);
  const [isCorrectClick, setIsCorrectClick] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const showNotification = useNotification();

  const ROUNDS = 1;
  const coordinates = getCoordinates();

  // Start game
  useEffect(() => {
    if (round <= ROUNDS && isPlaying) {
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
      round < ROUNDS ? setRound(round + 1) : handleGameOver();
    }, 500);
  };

  const handleGameOver = async () => {
    setIsRunning(false);
    setShowDialog(true);
  };

  const saveHighscore = async () => {
    if (!playerName.trim()) {
      showNotification("Please enter your name.", "error");
      return;
    }

    try {
      const response = await fetch("/api/highscores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: playerName,
          score: score,
          time: timer,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save highscore");
      }

      showNotification("Highscore saved successfully!", "success");
      setShowDialog(false);
      setIsPlaying(false);
    } catch (error) {
      console.error(error);
      showNotification(
        "An error occurred while saving your highscore.",
        "error"
      );
    }
  };

  return (
    <section className="game">
      {!isPlaying ? (
        <div className="overlay">
          <button className="play-button" onClick={() => setIsPlaying(true)}>
            Play
          </button>
          <Chessboard isInteractive={false} />
        </div>
      ) : (
        <>
          <Chessboard
            onSquareClick={handleSquareClick}
            clickedSquare={clickedSquare}
            isCorrectClick={isCorrectClick}
          />
          <section className="game-details">
            <header>
              <p>
                Round {round}/{ROUNDS}
              </p>
              <p>{formatTimer(timer)}</p>
            </header>
            <main>
              <p>
                Click on <strong>{targetCoordinate}</strong>
              </p>
              <p>
                Score <span>{score}</span>
              </p>
            </main>
            <button className="exit-button" onClick={() => setIsPlaying(false)}>
              Exit
            </button>
          </section>

          <Dialog
            title={"Game Over"}
            isOpen={showDialog}
            onClose={() => setShowDialog(false)}
          >
            <section className="game-information">
              <p>
                Score <strong>{score}</strong>
              </p>
              <p>
                Time <strong>{formatTimer(timer)}</strong>
              </p>
            </section>
            <ClearableInput
              value={playerName}
              onChange={(newValue) => setPlayerName(newValue)}
              placeholder="Enter your name"
            />
            <section className="button-group">
              <button onClick={saveHighscore} className="btn-primary">
                Save
              </button>
              <button
                onClick={() => {
                  setShowDialog(false);
                  setIsPlaying(false);
                }}
              >
                Discard
              </button>
            </section>
          </Dialog>
        </>
      )}
    </section>
  );
}
