// dependencies
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const employeeRoutes = require("./routes/employees");

const app = express();
const PORT = process.env.PORT || 3000;

// configurations
app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/employees', employeeRoutes) 

// server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));