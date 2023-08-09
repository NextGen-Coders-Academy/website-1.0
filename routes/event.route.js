const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event.controller");

// For postman testing (could use later for PERN update)
router.get("/api", eventController.getAllEvents);

// GET /events
router.get("/", eventController.getAll);

// GET /events/id
router.get('/:id', eventController.getOne)

module.exports = router;