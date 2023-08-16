const express = require("express");
const router = express.Router();
const { courseController } = require("../controllers");

// For postman testing (could use later for PERN update)
router.get("/api", courseController.getAllCourses);

// GET /courses
router.get("/", courseController.getAll);

// GET /courses/id
router.get('/:id', courseController.getOne)

module.exports = router;