const express = require('express');
const AdminController = require("../controllers/AdminController");
const {authenticateUser,isAdmin} = require('../middlewares/authMiddleware')
const router = express.Router();



//user managment 
router.get("/allUsers", authenticateUser, isAdmin, AdminController.getAllUsers);
router.delete("/delete/:id", authenticateUser, AdminController.deleteUser);

//guids managment
router.get("/allguides", authenticateUser, isAdmin, AdminController.getAllGuides);
router.get('/guide/:id', authenticateUser, AdminController.getGuideById);
router.put('/approval/:id/status', authenticateUser, isAdmin, AdminController.updateGuideStatus);



module.exports = router;