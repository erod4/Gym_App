const addExcerciseController = async (req, res) => {
  try {
    res.json({ message: "add Excercise" });
  } catch (error) {
    console.log(error.message);
  }
};
const getExcerciseController = async (req, res) => {
  try {
    res.json({ message: "get Excercise" });
  } catch (error) {
    console.log(error.message);
  }
};
const updateExcerciseController = async (req, res) => {
  try {
    res.json({ message: "update Excercise" });
  } catch (error) {
    console.log(error.message);
  }
};
const deleteExcerciseController = async (req, res) => {
  try {
    res.json({ message: "delete Excercise" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addExcerciseController,
  getExcerciseController,
  updateExcerciseController,
  deleteExcerciseController,
};
