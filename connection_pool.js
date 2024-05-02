class ConnectionPool {
    constructor(factory, connectionLimit) {
      this.factory = factory;
      this.connectionLimit = connectionLimit;
      this.pool = [];
    }
  
    getConnection(callback) {
      if (this.pool.length < this.connectionLimit) {
        const connection = this.factory.createConnection();
        this.pool.push(connection);
        callback(null, connection);
      } else {
        callback(new Error('Connection pool full'));
      }
    }
  
    releaseConnection(connection) {
      const index = this.pool.indexOf(connection);
      if (index !== -1) {
        this.pool.splice(index, 1);
        connection.end();
      }
    }
  }
  
  module.exports = ConnectionPool;