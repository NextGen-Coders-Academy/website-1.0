const express = require("express");
const router = express.Router();
const { baseController } = require("../controllers");

// GET /
router.get("/", baseController.home);
router.get("/about", baseController.about);
router.get("/faq", baseController.faq);

module.exports = router;