const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee.controller");

router.get("/", employeeController.employeeIndex);
router.get("/api", employeeController.getAllEmployees);

module.exports = router;
