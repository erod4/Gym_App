const addWorkoutController = async (req, res) => {
  try {
    res.json({ message: "add workout" });
  } catch (error) {
    console.log(error.message);
  }
};
const getWorkoutController = async (req, res) => {
  try {
    res.json({ message: "get workout" });
  } catch (error) {
    console.log(error.message);
  }
};
const updateWorkoutController = async (req, res) => {
  try {
    res.json({ message: "update workout" });
  } catch (error) {
    console.log(error.message);
  }
};
const deleteWorkoutController = async (req, res) => {
  try {
    res.json({ message: "delete workout" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addWorkoutController,
  getWorkoutController,
  updateWorkoutController,
  deleteWorkoutController,
};
