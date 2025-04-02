import { useEffect, useState } from "react";
import HighscoreDetails from "../HighscoreDetails/HighscoreDetails";

export default function Highscores() {
  const [highscores, setHighscores] = useState(null);

  useEffect(() => {
    const fetchHighscores = async () => {
      const response = await fetch("/api/highscores/top/5");
      const data = await response.json();

      if (response.ok) {
        setHighscores(data);
      }
    };

    fetchHighscores();
  }, []);

  return (
    <div className="highscores">
      {highscores &&
        highscores.map((highscore) => (
            <HighscoreDetails key={highscore._id} highscore={highscore} />  
        ))}
    </div>
  );
}
