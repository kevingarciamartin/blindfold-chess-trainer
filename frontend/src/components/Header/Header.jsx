import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <h1>Visio Noir</h1>
        </Link>
      </div>
    </header>
  );
}
