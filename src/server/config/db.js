


let mysql = require('mysql');

const db = mysql.createPool({
    host:'34.22.83.218',
    user:'omycourse',
    password:'omcs3688^^',
    database: 'YEO',
    port : 3306
})

module.exports=db;