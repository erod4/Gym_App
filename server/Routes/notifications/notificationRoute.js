const express = require("express");
const {
  deleteNotificationController,
} = require("../../Controllers/notfications/notificationController");
const isLoggedIn = require("../../Middlewares/isLoggedIn");
const notificationRoute = express.Router();

notificationRoute.delete("/", isLoggedIn, deleteNotificationController);

module.exports = notificationRoute;
