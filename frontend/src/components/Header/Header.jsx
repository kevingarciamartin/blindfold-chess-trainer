import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>Visionoir</h1>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/highscores"}>Highscores</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
