/**
 * Router for admin handlers
 * */ 

const express = require('express');
const addcategory = require('../controllers/admin');
const isAdmin = require('../middleware/auth');

const router = express.Router();

router.use(isAdmin) // runs before every function


router.route('/admin/addcategory').post(addcategory);


module.exports = router;

