const express = require('express');
const AdminController = require("../controllers/AdminController");
const {authenticateUser,isAdmin} = require('../middlewares/authMiddleware')
const router = express.Router();



//user managment 
router.get("/allUsers", authenticateUser, isAdmin, AdminController.getAllUsers);
router.get("/get/:id", authenticateUser, AdminController.getUserById);
router.put("/update/:id", AdminController.updateUser);
router.delete("/delete/:id", authenticateUser, AdminController.deleteUser);

//guids managment
router.get("/guides-profiles", authenticateUser, isAdmin, AdminController.getAllGuides);

module.exports = router;