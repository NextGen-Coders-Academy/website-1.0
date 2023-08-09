const express = require("express");
const router = express.Router();
const prospectController = require("../controllers/prospect.controller");

// postman testing
router.get("/api", prospectController.getAll);

// GET /prospects
router.get("/", prospectController.getAllProspects);

// POST /prospects/create
router.post("/", prospectController.create);

module.exports = router;