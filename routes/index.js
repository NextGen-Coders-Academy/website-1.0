const express = require("express");
const employeeRoutes = require('./employee.route');
const eventRoutes = require('./event.route');
const prospectRoutes = require('./prospect.route');
const homeRoutes = require('./base.route');
const courseRoutes = require('./course.route');
const studentRoutes = require('./student.route');

const router = express.Router();


router.use("/", homeRoutes);
router.use("/employees", employeeRoutes);
router.use("/events", eventRoutes);
router.use("/prospects", prospectRoutes);
router.use("/courses", courseRoutes);
router.use("/students", studentRoutes);

module.exports = router;