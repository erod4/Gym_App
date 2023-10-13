const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000 || process.env.PORT;
const userRoute = require("./Routes/users/usersRoute");
const workoutRoute = require("./Routes/workouts/workoutRoute");
const notificationRoute = require("./Routes/notifications/notificationRoute");
const globalErrorHandler = require("./Middlewares/globalErrorHandler");
const excerciseRoute = require("./Routes/excercises/excerciseRoute");
const setRoute = require("./Routes/sets/setsRoute");
require("dotenv").config();
require("./Config/dbConnect");
//enable cors for all requests //!change later
app.use(cors());
//pass incoming data
app.use(express.json());
// shortening routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/workouts", workoutRoute);
app.use("/api/v1/excercises", excerciseRoute);
app.use("/api/v1/sets", setRoute);
app.use("/api/v1/notifications", notificationRoute);
//global error handler
app.use(globalErrorHandler);

//init server
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
