const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fire',
    database: 'nodejs'
});

db.connect(()=>console.log("We are connected"));

module.exports = db;