const express = require("express");
const {
  deleteNotificationController,
} = require("../../Controllers/notfications/notificationController");
const notificationRoute = express.Router();

notificationRoute.delete("/", deleteNotificationController);

module.exports = notificationRoute;
