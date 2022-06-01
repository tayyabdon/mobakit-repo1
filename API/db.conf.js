const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'test-project-database.cnq8lntbfse3.us-east-1.rds.amazonaws.com',
    user: 'admin',
    port : 3306,
    password: 'testProjectPassword',
    database: 'test_project_database',
    insecureAuth : true
});

module.exports = conn;

