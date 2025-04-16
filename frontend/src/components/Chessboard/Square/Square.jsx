import "./Square.css";

export default function Square({
  coordinate,
  row,
  column,
  onSquareClick,
  isHighlighted,
  isInteractive,
}) {
  const isDarkSquare = (row + column) % 2 === 1;

  let highlightClass = "";
  if (isHighlighted === true) highlightClass = "correct";
  if (isHighlighted === false) highlightClass = "incorrect";

  return (
    <>
      {isInteractive ? (
        <button
          value={coordinate}
          className={`square ${
            isDarkSquare ? "dark" : "light"
          } ${highlightClass}`}
          onClick={() => onSquareClick(coordinate)}
          role="gridcell"
          aria-label={coordinate}
        ></button>
      ) : (
        <div
          className={`square ${isDarkSquare ? "dark" : "light"} uninteractive`}
          role="gridcell"
          aria-label={coordinate}
        ></div>
      )}
    </>
  );
}
