const express = require("express");
const {
  addWorkoutController,
  getWorkoutController,
  updateWorkoutController,
  deleteWorkoutController,
} = require("../../Controllers/workouts/workoutController");

const workoutRoute = express.Router();
workoutRoute.post("/add", addWorkoutController);
workoutRoute.get("/get", getWorkoutController);
workoutRoute.put("/", updateWorkoutController);
workoutRoute.delete("/", deleteWorkoutController);
module.exports = workoutRoute;
