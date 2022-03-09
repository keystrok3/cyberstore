
/**
 * Admin Model: functions for database access and operation for the person
 * with the 'ADMIN' role.
 * Admin privileges include access to: adding products, removing products,
 * changing product details, viewing sales data.
 * 
*/

const db_connection = require('../config/db_config');


// Adds a new product category to the MySQL db
const product_categories = (name) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO categories (category_id, name) VALUES (NULL, ?) ";
        db_connection.query(sql, name, (error, results) => {
            if(error) {
                reject(error)
            } else {
                resolve(results)
            }
        });
    });
};


module.exports = { product_categories };