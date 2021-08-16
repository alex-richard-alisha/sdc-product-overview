/* eslint-disable no-console */
const { Pool, Client } = require('pg');

// const { password } = require('../config/config');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'products_dev',
  password: 'password',
});

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'products_dev',
  password: 'password',
});

pool.connect()
  .then(() => console.log('🐘 🐘 DB CONNECTED 🐘 🐘'))
  .catch((e) => console.log(e))
  .finally(() => client.end());

module.exports = { pool, client };
