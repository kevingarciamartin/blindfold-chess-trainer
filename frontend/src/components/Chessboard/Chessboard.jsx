import "./Chessboard.css";
import { getCoordinates } from "../../utils/utils";
import Square from "./Square/Square";

export default function Chessboard({
  onSquareClick,
  clickedSquare,
  isCorrectClick,
  isInteractive = true,
}) {
  const coordinates = getCoordinates();
  console.log(coordinates)

  return (
    <section className="chessboard" role="grid" aria-label="Chessboard">
      {coordinates.map((rowCoordinates, rowIndex) => (
        <div key={rowIndex} role="row">
          {rowCoordinates.map((coordinate, colIndex) => (
            <Square
              key={coordinate}
              coordinate={coordinate}
              row={rowIndex}
              column={colIndex}
              onSquareClick={onSquareClick}
              isHighlighted={
                clickedSquare === coordinate ? isCorrectClick : null
              }
              isInteractive={isInteractive}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
