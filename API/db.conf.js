const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'ath-database-instance-1.cz5ywjpgig5v.me-south-1.rds.amazonaws.com',
    user: 'athadmin',
    port : 3306,
    password: 'ATH#GADLANG',
    database: 'test-project-db',
    insecureAuth : true
});

module.exports = conn;

