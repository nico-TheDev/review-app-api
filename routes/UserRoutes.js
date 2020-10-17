const { Router }  = require('express')
const userController = require('../controller/UserController')

const router = Router()

// CREATE USER
router.post('/signup',userController.signup_post)
// LOGIN
router.post('/login',userController.login_post)

router.get(`/user/:id`,userController.user_get)

module.exports = router