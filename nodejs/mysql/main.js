var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'dyw',
        port : '3306'
    }
);

connection.query('select * from test',
    function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    }
);

connection.query('update test set Id=120 where Id=911',
    function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    }
);

connection.query('select * from test',
    function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    }
);

connection.end();
