const mysql = require('mysql');

class ConnectionFactory {
  constructor(config) {
    this.config = config;
  }

  createConnection() {
    return mysql.createConnection(this.config);
  }
}

module.exports = ConnectionFactory;