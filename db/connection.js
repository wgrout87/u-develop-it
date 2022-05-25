const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL usernam,
        user: 'root',
        // Your MySQL password
        password: '[k?^wA4W&)P(',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;