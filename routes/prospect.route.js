const express = require("express");
const router = express.Router();
const prospectController = require("../controllers/prospect.controller");

router.get("/", prospectController.prospectIndex);
router.get("/api", prospectController.getAllProspects);
router.post("/create", prospectController.createProspect);

module.exports = router;