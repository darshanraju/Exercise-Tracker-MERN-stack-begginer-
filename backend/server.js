const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Getting models
require("./models/exercise.model");
require("./models/user.model");

//dotenv for abstracting important keys
require("dotenv").config();

//Setting up express up and applying middleware
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//Setting up mongodb connection
const uri = process.env.MONGO_URI;
mongoose
  .connect(
    "mongodb+srv://darshanRaju:darshan@cluster0-3cwfz.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(console.log("Connected to db..."))
  .catch(err => console.log("Error: ", err));

//Setting routing paths
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

//Connecting to PORT
app.listen(port, err => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Listening on port:", port);
  }
});
