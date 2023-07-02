const mysql = require('mysql');

const pool = mysql.createPool({
    host: '34.22.83.218',
    user: 'omycourse',
    password: 'omcs3688^^',
    database: 'YEO',
    port: 3306
});

console.log('데이터베이스 연결 성공');

module.exports = pool;