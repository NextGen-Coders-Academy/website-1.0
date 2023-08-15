const express = require("express");
const router = express.Router();
const { prospectController } = require("../controllers");

// postman testing
router.get("/api", prospectController.getAllProspects);

// GET /prospects
router.get("/", prospectController.getAll);

// POST /prospects/create
router.post("/", prospectController.create);

module.exports = router;