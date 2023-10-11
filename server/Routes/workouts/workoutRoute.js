const express = require("express");
const {
  addWorkoutController,
  getWorkoutController,
  updateWorkoutController,
  deleteWorkoutController,
} = require("../../Controllers/workouts/workoutController");
const isLoggedIn = require("../../Middlewares/isLoggedIn");

const workoutRoute = express.Router();
workoutRoute.post("/add", isLoggedIn, addWorkoutController);
workoutRoute.get("/get", isLoggedIn, getWorkoutController);
workoutRoute.put("/", isLoggedIn, updateWorkoutController);
workoutRoute.delete("/", isLoggedIn, deleteWorkoutController);
module.exports = workoutRoute;
