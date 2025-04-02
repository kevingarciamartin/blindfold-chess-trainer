import express from "express";
import {
  getHighscores,
  getTopHighscores,
  getHighscore,
  createHighscore,
  deleteHighscore,
  deleteHighscores,
  updateHighscore,
} from "../controllers/highscoreController.js";

const router = express.Router();

router.get("/", getHighscores);

router.get("/top/:amount", getTopHighscores);

router.get("/:id", getHighscore);

router.post("/", createHighscore);

router.delete("/:id", deleteHighscore);

router.delete("/", deleteHighscores);

router.patch("/:id", updateHighscore);

export default router;
