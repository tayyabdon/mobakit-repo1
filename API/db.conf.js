const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: '54.92.222.91',
    user: 'monrovia',
    port : 3306,
    password: '1985Monrovia!@@2022',
    database: 'mobikartdb',
    insecureAuth : true
});

module.exports = conn;