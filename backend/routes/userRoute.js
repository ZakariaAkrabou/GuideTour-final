const express = require("express");
const router = express.Router();
const multerMiddleware = require("../middlewares/MulterConfig");
const UserController = require("../controllers/UserController");
const { authenticateUser } = require("../middlewares/authMiddleware");




router.get("/user-profile", authenticateUser, UserController.getUserProfile);

router.put("/switch-profile/:id",authenticateUser,multerMiddleware.fields([
      { name: "profile_picture", maxCount: 1 },
      { name: "identity", maxCount: 1 },
      { name: "certificate", maxCount: 1 },
    ]),UserController.switchProfile
  );
router.put("/update/:id", UserController.updateUser);


// router.get('/show',authenticateUser,isAdmin,UserController.getAllUsers);
// router.get('/get/:id',authenticateUser, UserController.getUserById);
// router.put('/update/:id', UserController.updateUser);
// router.delete('/delete/:id',authenticateUser, UserController.deleteUser);

router.get('/',(req,res)=>{
    res.send('Welcome')
})
router.get('/show',authenticateUser,UserController.getAllUsers);
router.get('/get/:id',authenticateUser, UserController.getUserById);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id',authenticateUser, UserController.deleteUser);


module.exports = router;
