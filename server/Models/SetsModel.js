const mongoose = require("mongoose");
const setSchema = new mongoose.Schema({
  reps: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
  },
  startWeight: {
    type: Number,
    required: true,
  },
  currentWeight: {
    type: Number,
    required: true,
  },
});
const Set = mongoose.model("Set", setSchema);
module.exports = Set;
