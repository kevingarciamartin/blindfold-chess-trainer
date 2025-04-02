import Highscores from "../components/Highscores/Highscores";
import Chessboard from "../components/Chessboard/Chessboard";

export default function Home() {
  return (
    <div className="home">
      <h2>Home</h2>
      <Chessboard />
      <Highscores />
    </div>
  );
}
