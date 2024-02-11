const express = require('express')

const router = express.Router()

const userController = require('../Controllers/userController')


router.post('/user/register', userController.registerUser )
router.post('/user/Login', userController.LoginUser )

module.exports = router