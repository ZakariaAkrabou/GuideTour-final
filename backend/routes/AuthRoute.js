const express = require('express')
const router = express.Router()
const {createUser,emailConfirm,loginUser,forgetPassword,restPassword} = require('../controllers/AuthController')
const {validateInput} = require('../middlewares/validationMiddleware')

router.post('/register', validateInput, createUser);
router.get('/register/confirm/:token',emailConfirm)
router.post('/password-forget',forgetPassword)
router.post('/rest-password/:token',restPassword)
router.post('/login', loginUser);

module.exports = router