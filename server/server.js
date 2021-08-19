const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '3.143.147.30',
  port: 3001,
  database: 'sdc',
  password: 'password',
});

const client = new Client({
  user: 'postgres',
  host: '3.143.147.30',
  port: 3001,
  database: 'sdc',
  password: 'password',
});

pool.connect()
  .then(() => console.log('🐘 🐘 DB CONNECTED 🐘 🐘'))
  .catch((e) => console.log(e))
  .finally(() => client.end());

module.exports = { pool, client };


