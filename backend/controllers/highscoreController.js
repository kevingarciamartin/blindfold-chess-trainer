import Highscore from "../models/highscoreModel.js";
import mongoose from "mongoose";

// get all highscores
const getHighscores = async (req, res) => {
  const highscores = await Highscore.find({}).sort({ score: -1 });

  res.status(200).json(highscores);
};

// get a single highscore
const getHighscore = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such highscore." });
  }

  const highscore = await Highscore.findById(id);

  if (!highscore) {
    return res.status(404).json({ error: "No such highscore." });
  }

  res.status(200).json(highscore);
};

// create new highscore
const createHighscore = async (req, res) => {
  const { title, score } = req.body;

  try {
    const highscore = await Highscore.create({ title, score });
    res.status(200).json(highscore);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a highscore
const deleteHighscore = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such highscore." });
  }

  const highscore = await Highscore.findOneAndDelete({ _id: id });

  if (!highscore) {
    return res.status(404).json({ error: "No such highscore." });
  }

  res.status(200).json(highscore);
};

// update a highscore
const updateHighscore = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such highscore." });
  }

  const highscore = await Highscore.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!highscore) {
    return res.status(404).json({ error: "No such highscore." });
  }

  res.status(200).json(highscore);
};

export { getHighscores, getHighscore, createHighscore, deleteHighscore, updateHighscore };
