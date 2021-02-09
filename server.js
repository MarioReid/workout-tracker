const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// import routes
const apiRoutes = require('./routes/api_routes');
const htmlRoutes = require('./routes/html_routes');

const PORT = process.env.PORT || 3000;

const Workout = require("./models/workoutModel.js");

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  { useNewUrlParser: true }
);

// define routes
app.use('/api', apiRoutes);
app.use('*', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
