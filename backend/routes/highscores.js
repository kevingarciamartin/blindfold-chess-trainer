import express from "express";
import {
  getHighscores,
  getHighscore,
  createHighscore,
  deleteHighscore,
  updateHighscore,
} from "../controllers/highscoreController.js";

const router = express.Router();

router.get("/", getHighscores);

router.get("/:id", getHighscore);

router.post("/", createHighscore);

router.delete("/:id", deleteHighscore);

router.patch("/:id", updateHighscore);

export default router;
