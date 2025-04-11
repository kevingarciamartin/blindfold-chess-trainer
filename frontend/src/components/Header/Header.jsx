import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <h1>Visionoir</h1>
        </Link>
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
