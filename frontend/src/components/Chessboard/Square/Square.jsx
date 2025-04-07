import "./Square.css";

export default function Square({ coordinate, index }) {
  const row = Math.trunc(index / 8);
  const column = (index % 8) + 1;
  const isDarkSquare = (row + column) % 2 === 0;

  return (
    <button
      value={coordinate}
      className={`square ${isDarkSquare ? "dark" : "light"}`}
    ></button>
  );
}
