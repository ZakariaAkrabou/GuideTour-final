const express = require("express");
const router = express.Router();
const multerMiddleware = require("../middlewares/MulterConfig");
const GuideController = require("../controllers/GuideController");
const { authenticateUser } = require("../middlewares/authMiddleware");

router.put(
  "/update/:id",
  authenticateUser,
  multerMiddleware.fields([
    { name: "profile_picture", maxCount: 1 },
    { name: "identity", maxCount: 1 },
    { name: "certificate", maxCount: 1 },
  ]),
  GuideController.switchProfile
);

// router.get("/show-profile/:id", authenticateUser, GuideController.showProfile);
router.get("delete-guide/:id", authenticateUser,GuideController.deleteGuide);

module.exports = router;
