const express = require("express");
const employeeRoutes = require('./employee.route');
const eventRoutes = require('./event.route');
const prospectRoutes = require('./prospect.route');

const router = express.Router();

router.use("/employees", employeeRoutes);
router.use("/events", eventRoutes);
router.use("/prospects", prospectRoutes);

module.exports = router;