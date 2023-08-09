const express = require("express");
const router = express.Router();
const { baseController } = require("../controllers");

// GET /
router.get("/", baseController.home);
router.get("/about", baseController.about);

module.exports = router;