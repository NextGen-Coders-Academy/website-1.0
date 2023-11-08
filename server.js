// dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 4000;

// routes
const routes = require('./routes');

// configurations
app.set("view engine", "ejs");

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", routes);

// server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
