require('dotenv').config()

const express = require('express');
const app = express();


const PORT = process.env.PORT;

const User = require('./models/user');

app.use(express.json());

/** routes */ 

// Registration
app.post('/users/auth/register', require('./routes/auth'));

// Login
app.post('/users/auth/login', require('./routes/auth'));

// Log Out
app.get('/users/auth/logout', require('./routes/auth'));

const server = app.listen(PORT, () => {
    console.log(`Server at http:127.0.0.1:${PORT}`)
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error ${err}`);
    server.close(() => process.exit(1));
});