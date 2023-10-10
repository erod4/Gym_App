const mongoose = require("mongoose");
const workoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    excercises: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Excercise",
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
