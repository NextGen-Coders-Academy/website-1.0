const express = require('express');
const router = express.Router()
const testController = require('../controllers/test')

router.get('/getAllTests', testController.getAllTests);
router.post('/create', testController.createTest);

module.exports = router;