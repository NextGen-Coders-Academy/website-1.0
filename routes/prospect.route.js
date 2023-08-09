const express = require("express");
const router = express.Router();
const { prospectController } = require("../controllers");

// postman testing
router.get("/api", prospectController.getAll);

// GET /prospects
router.get("/", prospectController.getAllProspects);

// POST /prospects/create
router.post("/", prospectController.create);

module.exports = router;