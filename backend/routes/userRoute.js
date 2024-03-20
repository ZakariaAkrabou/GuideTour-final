const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController'); 
const logingController = require('../middlewares/logingController')

router.get('/',(req,res)=>{
    res.send('Welcome')
})
router.post('/loging',logingController.logingValidator)
router.get('/show',logingController.tokenValidator,UserController.getAllUsers);
router.get('/get/:id', UserController.getUserById);
router.post('/create', UserController.createUser);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);

module.exports = router;
