const { Pool } = require('pg');
const pool = new Pool({
  user: 'yourUsername',
  host: 'localhost',
  database: 'lti',
  password: 'yourPassword',
  port: 5432,
});

module.exports = pool;