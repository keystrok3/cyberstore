
/**
 * Router for the authentication handlers.
 * 
 * Uses imported callbacks from the ../controllers/auth directory
 * to carry out those functions at specific routes.
 * 
 * */ 

const express = require('express');
const router = express.Router();

const { register, login, logout } = require('../controllers/auth');


/** Auth routes */ 
router.route('/users/auth/register').post(register);

router.route('/users/auth/login').post(login);

router.route('/users/auth/logout').get(logout);


module.exports = router;