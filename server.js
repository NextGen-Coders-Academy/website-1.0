// dependencies
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3000;

// routes
const employeeRoute = require('./routes/employee.route');
const prospectRoute = require('./routes/prospect.route');

// configurations
app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/employees", employeeRoute);
app.use("/prospects", prospectRoute);

// server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
