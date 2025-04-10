import "./HighscoreDetails.css";

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
        {time}
      </p>
      <p>{createdAt}</p>
    </article>
  );
}
