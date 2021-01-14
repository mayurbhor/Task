const express = require('express');

const { body } = require('express-validator');

const router = express.Router()

const User = require('../models/user');

const authController = require('../controllers/auth')

router.post(
    '/signup',
    [
        body('name').trim().not().isEmpty(),
        body('email').isEmpty.isEmail().withMessage('Please enter a valid email.')
            .custom(async (email) => {
                const user = await User.find(email);//runs that sql query from /models/user.js 
                if (user[0].length > 0) {
                    return Promise.reject('Email address already exist!')
                }
            })
            .normalizeEmail(),
        body('password').trim().isLength({ min: 7 })
    ], authController.signup
)

module.exports = router;