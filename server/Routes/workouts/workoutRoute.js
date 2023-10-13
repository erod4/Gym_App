const express = require("express");
const {
  addWorkoutController,
  getWorkoutController,
  updateWorkoutController,
  deleteWorkoutController,
} = require("../../Controllers/workouts/workoutController");
const isLoggedIn = require("../../Middlewares/isLoggedIn");

const workoutRoute = express.Router();
workoutRoute.post("/add", addWorkoutController);
workoutRoute.get("/:id", getWorkoutController);
workoutRoute.put("/:id", updateWorkoutController);
workoutRoute.delete("/:id", deleteWorkoutController);
module.exports = workoutRoute;
