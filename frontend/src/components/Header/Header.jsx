import "./Header.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 380);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 380);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="container">
        {isSmallScreen ? (
          <img src="../../../public/eye.svg" alt="Visionoir logo" style={{ height: "2rem" }} />
        ) : (
          <h1>Visionoir</h1>
        )}
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
