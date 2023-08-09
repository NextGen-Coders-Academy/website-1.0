const express = require("express");
const router = express.Router();
const { employeeController } = require("../controllers");

// postman testing
router.get("/api", employeeController.getAllEmployees);

// GET /employees
router.get("/", employeeController.getAll);

module.exports = router;
