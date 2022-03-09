
/**
 * Authentication middleware: to confirm that a user is logged
 * and has the neccesary permissions
 * This will run before the admin view functions
 * */

const isAdmin = (req, res, next) => {
    SESSION = req.session   // req.session stores the session data
    if(!SESSION.email || !SESSION.role) {
        res.json({ msg: "Not Authorised"});
    } else {
        next();
    }
};

module.exports = isAdmin;

