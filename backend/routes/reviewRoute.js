const express = require('express');
const router = express.Router();
const { extractUserId, reviewSave } = require('../controllers/ReviewController');

router.post("/feedback", extractUserId, reviewSave);

module.exports = router;
