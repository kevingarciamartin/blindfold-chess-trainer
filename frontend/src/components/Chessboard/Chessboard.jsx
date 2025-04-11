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

  return (
    <section className="chessboard">
      {coordinates.map((coordinate, index) => (
        <Square
          key={coordinate}
          coordinate={coordinate}
          index={index}
          onSquareClick={onSquareClick}
          isHighlighted={clickedSquare === coordinate ? isCorrectClick : null}
          isInteractive={isInteractive}
        />
      ))}
    </section>
  );
}
