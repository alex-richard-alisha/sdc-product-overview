const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '18.220.108.173',
  port: 3001,
  database: 'sdc',
  password: 'password',
});

const client = new Client({
  user: 'postgres',
  host: '18.220.108.173',
  port: 3001,
  database: 'sdc',
  password: 'password',
});

pool.connect()
  .then(() => console.log('🐘 🐘 DB CONNECTED 🐘 🐘'))
  .catch((e) => console.log(e))
  .finally(() => client.end());

module.exports = { pool, client };


