
/** 
 * User Model.
 * 
 * To contain all functionalities regarding creation and deletion of users 
 * as well as updating of user info
 * 
 *  */

const db_connection = require('../config/db_config');   // db config setting imported from another directory

class User {
    create_user(fname, lname, email, password) {
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO users (user_id, fname, lname, email, password) VALUES (NULL, ?, ?, ?, ?)";
            db_connection.query(
                sql,
                [fname, lname, email, password],
                (err, results, fields) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
        });
    }

    find_user(email) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM users WHERE email = ?";
            db_connection.query(
                sql, 
                email,
                (err, results) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            );
        })
    }
}


module.exports =  User;