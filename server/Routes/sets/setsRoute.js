const express = require("express");
const {
  addSetController,
  getSetController,
  updateSetController,
  deleteSetController,
} = require("../../Controllers/sets/setController");
const isLoggedIn = require("../../Middlewares/isLoggedIn");

const setRoute = express.Router();
setRoute.post("/add", addSetController);
setRoute.get("/:id", getSetController);
setRoute.put("/:id", updateSetController);
setRoute.delete("/:id", deleteSetController);
module.exports = setRoute;
