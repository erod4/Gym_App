const express = require("express");
const app = express();
const port = 8000 || process.env.PORT;
const userRoute = require("./Routes/users/usersRoute");
const workoutRoute = require("./Routes/workouts/workoutRoute");
const notificationRoute = require("./Routes/notifications/notificationRoute");
require("dotenv").config();
require("./Config/dbConnect");
// shortening routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/workouts", workoutRoute);
app.use("/api/v1/notifications", notificationRoute);

//init server
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
