import "./HighscoreDetails.css";
import { formatTimer, formatDate } from "../../utils/utils";

export default function HighscoreDetails({ highscore }) {
  const { title, score, time, createdAt } = highscore;

  return (
    <article className="highscore-details">
      <h3>{title}</h3>
      <p>
        <strong>Score: </strong>
        {score}
      </p>
      <p>
        <strong>Time: </strong>
        {formatTimer(time)}
      </p>
      <p>{formatDate(createdAt)}</p>
    </article>
  );
}
