import "./Square.css";

export default function Square({
  coordinate,
  index,
  onSquareClick,
  isHighlighted,
}) {
  const row = Math.trunc(index / 8);
  const column = (index % 8) + 1;
  const isDarkSquare = (row + column) % 2 === 0;

  let highlightClass = "";

  if (isHighlighted === true) highlightClass = "correct";
  if (isHighlighted === false) highlightClass = "incorrect";

  return (
    <button
      value={coordinate}
      className={`square ${isDarkSquare ? "dark" : "light"} ${highlightClass}`}
      onClick={() => onSquareClick(coordinate)}
    ></button>
  );
}
