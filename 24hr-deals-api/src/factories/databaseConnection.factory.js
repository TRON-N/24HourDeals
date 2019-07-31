var mysql = require('mysql')
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: '24hourdeals'
})

class DatabaseConnection {
    static doQuery(queryString, values) {
        return new Promise (function(resolve, reject) {
            return pool.getConnection(function(error, connection) {
                if (!error) {
                    connection.query(
                        {
                        sql: queryString,
                        timeout: 40000,
                        values: values
                        }, 
                        function(error, results, fields) 
                        {
                            connection.release();
                            if (!error) {
                                resolve(results, fields);
                            } else {
                                reject(error);
                            };
                        }
                    );
                }
                else {
                    reject(error);
                }
            });
        });
    }
}


    DatabaseConnection.doQuery("SELECT COUNT(*) FROM USER", ["Mikhail"]).then((values) => {
        console.log('We have an answer!');
        console.log(values)
    }
    );


//DatabaseConnection.getTest("SELECT COUNT(*) FROM USER");

module.exports = DatabaseConnection;