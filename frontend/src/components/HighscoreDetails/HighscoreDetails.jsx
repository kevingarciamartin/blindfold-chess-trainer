import './HighscoreDetails.css'

export default function HighscoreDetails({ highscore }) {
  return (
    <article className="highscore-details">
      <h3>{highscore.title}</h3>
      <p>
        <strong>Score: </strong>
        {highscore.score}/10
      </p>
      <p>{highscore.createdAt}</p>
    </article>
  );
}
