<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const GuideController = require("../controllers/GuideController");
const multerConfig = require("../middlewares/multerconfig");


router.put("/update/:id", GuideController.updateGuide);
router.delete("/delete/:id", GuideController.deleteGuide);
=======
// const express = require("express");
// const router = express.Router();
// const multerMiddleware = require("../middlewares/MulterConfig");
// const GuideController = require("../controllers/GuideController");
// const { authenticateUser } = require("../middlewares/authMiddleware");

// router.put(
//   "/update/:id",
//   authenticateUser,
//   multerMiddleware.fields([
//     { name: "profile_picture", maxCount: 1 },
//     { name: "identity", maxCount: 1 },
//     { name: "certificate", maxCount: 1 },
//   ]),
//   GuideController.switchProfile
// );
>>>>>>> 30fa2ec3fbceae0297a767b705b64d916bf62507

// router.get("/show-profile/:id", authenticateUser, GuideController.showProfile);
// router.get("delete-guide/:id", authenticateUser,GuideController.deleteGuide);

// module.exports = router;
