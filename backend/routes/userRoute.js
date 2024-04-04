const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
 

router.get('/',(req,res)=>{
    res.send('Welcome')
})


router.post('/loging',AuthController.logingValidator,)
router.post('/register', AuthController.createUser);



router.get('/show',logingController.tokenValidator,UserController.getAllUsers);
router.get('/get/:id',logingController.tokenValidator, UserController.getUserById);

router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id',logingController.tokenValidator, UserController.deleteUser);

module.exports = router;
