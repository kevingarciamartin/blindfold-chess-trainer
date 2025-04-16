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
        const [resTopHighscores, resHighscores] = await Promise.all([
          fetch("/api/highscores/top/5"),
          fetch("/api/highscores"),
        ]);

        if (resTopHighscores.status === 204 || resHighscores.status === 204) {
          setTopHighscores([]);
          setHighscores([]);
          return;
        }

        if (resTopHighscores.ok) {
          const dataTopHighscores = await resTopHighscores.json();
          setTopHighscores(dataTopHighscores);
        } else {
          showNotification(
            `Failed to fetch highscores: ${resTopHighscores.status} ${resTopHighscores.statusText}`,
            "error"
          );
        }

        if (resHighscores.ok) {
          const dataHighscores = await resHighscores.json();
          setHighscores(dataHighscores);
        } else {
          showNotification(
            `Failed to fetch highscores: ${resHighscores.status} ${resHighscores.statusText}`,
            "error"
          );
        }
      } catch (error) {
        showNotification("Error fetching highscores.", "error");
        console.error("Error fetching highscores:", error);
      }
    };

    fetchHighscores();
  }, []);

  if (highscores === null && topHighscores === null) {
    return (
      <div className="highscores">
        <section className="top-highscores">
          <h2>Top Highscores</h2>
          <p>Loading...</p>
        </section>
        <section className="all-highscores">
          <h2>Highscores</h2>
          <p>Loading...</p>
        </section>
      </div>
    );
  }

  return (
    <div className="highscores">
      {highscores &&
        topHighscores &&
        highscores.length === 0 &&
        highscores.length === 0 && (
          <>
            <section className="top-highscores">
              <h2>Top Highscores</h2>
              <p>No highscores available.</p>
            </section>
            <section className="all-highscores">
              <h2>Highscores</h2>
              <p>No highscores available.</p>
            </section>
          </>
        )}
      {topHighscores && topHighscores.length > 0 && (
        <section className="top-highscores">
          <h2>Top Highscores</h2>
          <ul>
            {topHighscores.map((highscore) => (
              <li key={highscore._id}>
                <HighscoreDetails highscore={highscore} />
              </li>
            ))}
          </ul>
        </section>
      )}
      {highscores && highscores.length > 0 && (
        <section className="all-highscores">
          <h2>Highscores</h2>
          <ul>
            {highscores.map((highscore) => (
              <li key={highscore._id}>
                <HighscoreDetails highscore={highscore} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
