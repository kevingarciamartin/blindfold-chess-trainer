import "./HighscoreDetails.css";
import { formatTimer, formatDate } from "../../utils/utils";

export default function HighscoreDetails({ highscore }) {
  const { title, score, time, createdAt } = highscore;

  return (
    <article className="highscore-details">
      <span></span>
      <div>
        <h3>{title}</h3>
        <main>
          <p>
            Score:
            <strong>{score}</strong>
          </p>
          <p>
            Time:
            <strong>{formatTimer(time)}</strong>
          </p>
          <p>{formatDate(createdAt)}</p>
        </main>
      </div>
    </article>
  );
}
