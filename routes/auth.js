const express = require('express');
const session = require('express-session');
const router = express.Router();

const { register, login, logout } = require('../controllers/auth');


router.use(session({
    name: process.env.SESSION_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: parseInt(process.env.LIFETIME),
        sameSite: true,
        secure: false
    }
}));

router.route('/users/auth/register').post(register);

router.route('/users/auth/login').post(login);

router.route('/users/auth/logout').get(logout);


module.exports = router;