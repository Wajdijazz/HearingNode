var mysql      = require('mysql');

var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'db_hearing'
});



module.exports=connection;