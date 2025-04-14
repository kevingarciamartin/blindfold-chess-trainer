import "./Highscores.css";
import { useEffect, useState } from "react";
import { useNotification } from "../../contexts/NotificationContext";
import HighscoreDetails from "../HighscoreDetails/HighscoreDetails";

export default function Highscores() {
  const [highscores, setHighscores] = useState(null);
  const [topHighscores, setTopHighscores] = useState(null);
  const showNotification = useNotification();

  useEffect(() => {
    const fetchHighscores = async () => {
      try {
        const response = await fetch("/api/highscores");

        if (response.status === 204) {
          setHighscores([]);
          return;
        }

        if (response.ok) {
          const data = await response.json();
          setHighscores(data);
        } else {
          showNotification(
            `Failed to fetch highscores: ${response.status} ${response.statusText}`,
            "error"
          );
        }
      } catch (error) {
        showNotification("Error fetching highscores.", "error");
        console.error("Error fetching highscores:", error);
      }
    };

    const fetchTopHighscores = async () => {
      try {
        const response = await fetch("/api/highscores/top/5");

        if (response.status === 204) {
          setTopHighscores([]);
          return;
        }

        if (response.ok) {
          const data = await response.json();
          setTopHighscores(data);
        } else {
          showNotification(
            `Failed to fetch top highscores: ${response.status} ${response.statusText}`,
            "error"
          );
        }
      } catch (error) {
        showNotification("Error fetching top highscores.", "error");
        console.error("Error fetching top highscores:", error);
      }
    };

    fetchHighscores();
    fetchTopHighscores();
  }, []);

  if (highscores === null && topHighscores === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="highscores">
      {highscores &&
        topHighscores &&
        highscores.length === 0 &&
        highscores.length === 0 && <p>No highscores available.</p>}
      {topHighscores && topHighscores.length > 0 && (
        <section className="top-highscores">
          <h2>Top Highscores</h2>
          <main>
            {topHighscores.map((highscore) => (
              <HighscoreDetails key={highscore._id} highscore={highscore} />
            ))}
          </main>
        </section>
      )}
      {highscores && highscores.length > 0 && (
        <section className="all-highscores">
          <h2>Highscores</h2>
          <main>
            {highscores.map((highscore) => (
              <HighscoreDetails key={highscore._id} highscore={highscore} />
            ))}
          </main>
        </section>
      )}
    </div>
  );
}
