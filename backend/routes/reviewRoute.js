const express = require('express');
const router = express.Router();
const {extractUserId,reviewSave} = require('../controllers/Review')


router.post("/feedback", extractUserId, reviewSave );

module.exports = router;