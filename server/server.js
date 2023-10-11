const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000 || process.env.PORT;
const userRoute = require("./Routes/users/usersRoute");
const workoutRoute = require("./Routes/workouts/workoutRoute");
const notificationRoute = require("./Routes/notifications/notificationRoute");
const globalErrorHandler = require("./Middlewares/globalErrorHandler");
require("dotenv").config();
require("./Config/dbConnect");
app.use(cors());
//pass incoming data
app.use(express.json());
// shortening routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/workouts", workoutRoute);
app.use("/api/v1/notifications", notificationRoute);
//global error handler
app.use(globalErrorHandler);

//init server
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
