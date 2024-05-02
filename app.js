const ConnectionFactory = require('./connection_factory');
const ConnectionPool = require('./connection_pool');
const MySQLService = require('./mysql_service');

const factory = new ConnectionFactory({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
});

const pool = new ConnectionPool(factory, 50000);
const service = new MySQLService(pool);

const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
const params = ['john_doe', 'john@example.com'];

service.executeQuery(sql, params, (err, result) => {
  if (err) {
    console.error('Error executing query:', err);
  } else {
    console.log('Insert successful:', result);
  }
});