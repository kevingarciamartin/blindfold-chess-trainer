import mongoose from "mongoose";

const Schema = mongoose.Schema;

const highscoreSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Highscore", highscoreSchema);
