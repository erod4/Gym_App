const express = require("express");

const {
  registerUserController,
  loginUserController,
  getProfileController,
  deleteProfileController,
  updateProfileController,
  resetPasswordController,
  verifyResetController,
} = require("../../Controllers/users/userController");

const userRoute = express.Router();

userRoute.post("/register", registerUserController);
userRoute.post("/login", loginUserController);
userRoute.post("/reset", resetPasswordController);
userRoute.post("/verify-reset", verifyResetController);
userRoute.get("/profile", getProfileController);
userRoute.delete("/", deleteProfileController);
userRoute.put("/", updateProfileController);
module.exports = userRoute;
