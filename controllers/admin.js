/**
 * Admin handlers here will carry out the admin functions
 * */ 

const admin = require('../models/admin');

const addcategory = async (req, res) => {
    const { name } = req.body;

    try {
        const server_res = await admin.product_categories(name);
        console.log(server_res);
        res.json({ msg: "success"});
    } catch (error) {
        console.error(error);
        res.json({ msg: "Failed"});
    }
};

module.exports = addcategory;