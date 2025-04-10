import "./Square.css";

export default function Square({ coordinate, index, onSquareClick }) {
  const row = Math.trunc(index / 8);
  const column = (index % 8) + 1;
  const isDarkSquare = (row + column) % 2 === 0;

  return (
    <button
      value={coordinate}
      className={`square ${isDarkSquare ? "dark" : "light"}`}
      onClick={() => onSquareClick(coordinate)}
    ></button>
  );
}
