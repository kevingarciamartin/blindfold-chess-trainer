import "./Chessboard.css";
import { stringOuterProduct } from "../../utils/utils";
import Square from "./Square/Square";

export default function Chessboard({ onSquareClick, clickedSquare, isCorrectClick }) {
  const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const coordinates = stringOuterProduct(rows, columns);

  return (
    <section className="chessboard">
      {coordinates.map((coordinate, index) => (
        <Square
          key={coordinate}
          coordinate={coordinate}
          index={index}
          onSquareClick={onSquareClick}
          isHighlighted={clickedSquare === coordinate ? isCorrectClick : null}
        />
      ))}
    </section>
  );
}
