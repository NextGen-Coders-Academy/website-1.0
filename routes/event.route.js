const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event.controller");

// Get all events (For reporting)
router.get("/", eventController.getAll);

// For postman testing (could use later for PERN update)
router.get("/api", eventController.getAllEvents);

router.get('/:id', eventController.getOne)

module.exports = router;