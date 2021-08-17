const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'sdc-m-postgres',
  port: 5432,
  database: 'sdc',
  password: 'password',
});

const client = new Client({
  user: 'postgres',
  host: 'sdc-m-postgres',
  port: 5432,
  database: 'sdc',
  password: 'password',
});

pool.connect()
  .then(() => console.log('🐘 🐘 DB CONNECTED 🐘 🐘'))
  .catch((e) => console.log(e))
  .finally(() => client.end());

module.exports = { pool, client };
