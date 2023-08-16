const express = require("express");
const router = express.Router();
const { studentController } = require("../controllers");

// postman testing
router.get("/api", studentController.getAllStudents);

// GET /students
router.get("/", studentController.getAll);

// POST /students/create
router.post("/", studentController.create);

module.exports = router;