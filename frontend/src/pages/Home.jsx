import Game from "../components/Game/Game";
import Highscores from "../components/Highscores/Highscores";

export default function Home() {
  return (
    <div className="home">
      <h2>Home</h2>
      <Game />
      <Highscores />
    </div>
  );
}
