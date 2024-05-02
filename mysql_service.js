class MySQLService {
    constructor(pool) {
      this.pool = pool;
    }
  
    executeQuery(sql, params, callback) {
      this.pool.getConnection((err, connection) => {
        if (err) {
          callback(err);
        } else {
          connection.query(sql, params, (queryErr, result) => {
            this.pool.releaseConnection(connection);
            callback(queryErr, result);
          });
        }
      });
    }
  }
  
  module.exports = MySQLService;