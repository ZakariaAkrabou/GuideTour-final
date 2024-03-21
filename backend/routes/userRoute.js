const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController'); 
const {authenticateUser,isAdmin} = require('../middlewares/authMiddleware')
const emailValidate = require('../middlewares/emailValidator')

router.get('/',(req,res)=>{
    res.send('Welcome')
})
// router.post('/loging',logingController.logingValidator,)
router.get('/show',authenticateUser,isAdmin,UserController.getAllUsers);
router.get('/get/:id',authenticateUser, UserController.getUserById);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id',authenticateUser, UserController.deleteUser);

module.exports = router;
