const express = require("express");
const router = express.Router();
const GuideController = require("../controllers/GuideController");

router.get("/profile", GuideController.showProfile);
router.post("/create", GuideController.createGuide);
router.put("/update/:id", GuideController.updateGuide);
router.delete("/delete/:id", GuideController.deleteGuide);

module.exports = router;
