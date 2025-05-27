const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const errorHandling = require('./middlewares/errorHandling.middleware');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(errorHandling);

// Basic test route
app.get("/", (req, res) => {
  res.send("Result Processing System backend is running.");
});

module.exports = app;
