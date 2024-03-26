const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authenticateUser } = require("../middlewares/authMiddleware");



router.get("/user-profile", authenticateUser, UserController.getUserProfile);


module.exports = router;
