const registerUserController = async (req, res) => {
  try {
    res.json({ message: "register user" });
  } catch (error) {
    console.log(error.message);
  }
};
const getProfileController = async (req, res) => {
  try {
    res.json({ message: "get profile" });
  } catch (error) {
    console.log(error.message);
  }
};
const verifyResetController = async (req, res) => {
  try {
    res.json({ message: "verify reset" });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteProfileController = async (req, res) => {
  try {
    res.json({ message: "delete profile" });
  } catch (error) {
    console.log(error.message);
  }
};

const updateProfileController = async (req, res) => {
  try {
    res.json({ message: "update profile" });
  } catch (error) {
    console.log(error.message);
  }
};

const loginUserController = async (req, res) => {
  try {
    res.json({ message: "login user" });
  } catch (error) {
    console.log(error.message);
  }
};

const resetPasswordController = async (req, res) => {
  try {
    res.json({ message: "reset password" });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  registerUserController,
  getProfileController,
  verifyResetController,
  deleteProfileController,
  updateProfileController,
  loginUserController,
  resetPasswordController,
};
