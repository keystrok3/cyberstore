
/**
 * Router for the authentication handlers.
 * 
 * Uses imported callbacks from the ../controllers/auth directory
 * to carry out those functions at specific routes.
 * 
 * Uses express-session. Configuration is done here.
 * */ 

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


/** Auth routes */ 
router.route('/users/auth/register').post(register);

router.route('/users/auth/login').post(login);

router.route('/users/auth/logout').get(logout);


module.exports = router;