import "./Chessboard.css";
import { stringOuterProduct } from "../../utils/utils";
import Square from "./Square/Square";

export default function Chessboard() {
  const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const coordinates = stringOuterProduct(rows, columns).flat();

  return (
    <section className="chessboard">
      {coordinates.map((coordinate, index) => (
        <Square coordinate={coordinate} index={index}/>
      ))}
    </section>
  );
}
