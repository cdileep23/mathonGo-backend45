import express from "express";
import {
  getAllChapters,
  getChapterById,
  postChapters,
} from "../controllers/chapter.controller.js";
import { isAdmin } from "../middleware/auth.js";

export const chapterRouter = express.Router();

chapterRouter.route("/").get(getAllChapters);
chapterRouter.route("/:id").get(getChapterById);
chapterRouter.route("/").post(isAdmin, postChapters);
