require('dotenv').config()

const mysql = require('mysql2');
// create connection to mysql db
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'joemw',
    database: 'cyberstoreDB',
    password: 'MySQLpassword_SHA#256'
});


module.exports = connection;