const express = require("express");
const {
  addExcerciseController,
  getExcerciseController,
  updateExcerciseController,
  deleteExcerciseController,
} = require("../../Controllers/excercises/excerciseController.js");
const isLoggedIn = require("../../Middlewares/isLoggedIn");

const excerciseRoute = express.Router();
excerciseRoute.post("/add", addExcerciseController);
excerciseRoute.get("/:id", getExcerciseController);
excerciseRoute.put("/:id", updateExcerciseController);
excerciseRoute.delete("/:id", deleteExcerciseController);
module.exports = excerciseRoute;
