
const bcrypt = require('bcrypt');

const User = require('../models/user');


// Handler for registration / user creation events
const register = async (req, res) => {
    const { fname, lname, email, password } = req.body;

    const user = new User();

    try {
        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, salt);

        const results = await user.create_user( fname, lname, email, hashed_password );
        console.log(results);
        res.json({ msg: "Done" })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Failed"});
    }
}



// Handler for login events
const login = async (req, res) => {
    const { email, password } = req.body;
    
    let user = new User();
        
    try {
        user = await user.find_user(email);
        
        if (user[0]) {
            const match = await bcrypt.compare(password, user[0].password);
            if(match) {

                req.session.email = user[0].email;
                req.session.role = user[0].role;    // ADMIN or CUSTOMER
                res.status(201).json({ msg: "success"})
            } else {
                res.json({ msg: "Wrong Password" });
            }
        } else {
            res.json({ msg: "Wrong username"});
        }
    } catch (error) {
        console.error(error.message);
        res.sendStatus(500);
    }
};


const logout = (req, res) => {
    req.session.destroy(err => {
        if(err) {
            console.error(err);
            res.json({ msg: "Something went wrong"});
        } else {
            res.clearCookie(process.env.SESSION_NAME);
            res.json({ msg: "Log Out Success"});
        }
    });
};

module.exports = { register, login, logout };
