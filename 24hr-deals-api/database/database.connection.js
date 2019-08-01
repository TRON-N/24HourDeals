const connectionConfig = require('../config/database.config')
const mysql = require('mysql')
const pool = mysql.createPool({
    connectionLimit: 10,
    host: connectionConfig.host,
    user: connectionConfig.user,
    password: connectionConfig.password,
    database: connectionConfig.database
});

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

module.exports = DatabaseConnection;