const express = require("express");
const router = express.Router();
const GuideController = require("../controllers/GuideController");
const multerConfig = require("../middlewares/multerconfig");


router.put("/update/:id", GuideController.updateGuide);
router.delete("/delete/:id", GuideController.deleteGuide);

module.exports = router;
