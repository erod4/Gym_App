const addSetController = async (req, res) => {
  try {
    res.json({ message: "add set" });
  } catch (error) {
    console.log(error.message);
  }
};
const getSetController = async (req, res) => {
  try {
    res.json({ message: "get set" });
  } catch (error) {
    console.log(error.message);
  }
};
const updateSetController = async (req, res) => {
  try {
    res.json({ message: "update set" });
  } catch (error) {
    console.log(error.message);
  }
};
const deleteSetController = async (req, res) => {
  try {
    res.json({ message: "delete set" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addSetController,
  getSetController,
  updateSetController,
  deleteSetController,
};
