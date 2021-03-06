
/**
 * Entry point of the application
 * */ 

require('dotenv').config({ path: __dirname + '/config.env' });

const express = require('express');
const session = require('express-session');

const app = express();


const PORT = process.env.PORT;  // Retrieve value for PORT from environment variable


app.use(session({
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

app.use(express.json());

/** ROUTES */ 

// Registration
app.post('/users/auth/register', require('./routes/auth'));

// Login
app.post('/users/auth/login', require('./routes/auth'));

// Log Out
app.get('/users/auth/logout', require('./routes/auth'));


/** Admin Routes*/ 
app.post('/admin/addcategory', require('./routes/admin'));


// Launch the app
const server = app.listen(PORT, () => {
    console.log(`Server at http:127.0.0.1:${PORT}`)
});


// Handles any configuration errors 
process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error ${err}`);
    server.close(() => process.exit(1));
});