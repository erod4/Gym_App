const mongoose = require("mongoose");

const excerciseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sets: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Set",
    },
    notes: {
      type: String,
    },
    weightIncreasePercentage: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);
const Excercise = mongoose.model("Excercise", excerciseSchema);
module.exports = Excercise;
