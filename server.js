
/**
 * Entry point of the application
 * */ 

require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;


app.use(express.json());

/** ROUTES */ 

// Registration
app.post('/users/auth/register', require('./routes/auth'));

// Login
app.post('/users/auth/login', require('./routes/auth'));

// Log Out
app.get('/users/auth/logout', require('./routes/auth'));


// Launch the app
const server = app.listen(PORT, () => {
    console.log(`Server at http:127.0.0.1:${PORT}`)
});


// Handles any configuration errors 
process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error ${err}`);
    server.close(() => process.exit(1));
});