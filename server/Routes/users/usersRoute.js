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
const isLoggedIn = require("../../Middlewares/isLoggedIn");

const userRoute = express.Router();

userRoute.post("/register", registerUserController);
userRoute.post("/login", loginUserController);
userRoute.post("/reset", resetPasswordController);
userRoute.post("/verify-reset", verifyResetController);
userRoute.get("/profile", isLoggedIn, getProfileController);
userRoute.delete("/", isLoggedIn, deleteProfileController);
userRoute.put("/", isLoggedIn, updateProfileController);
module.exports = userRoute;
