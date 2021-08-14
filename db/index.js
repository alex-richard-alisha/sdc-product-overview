/* eslint-disable no-console */
const { Pool, Client } = require('pg');

const { password } = require('../config/config');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'products_dev',
  password,
});

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'products_dev',
  password,
});

client.connect()
  .then(() => console.log('🐘 🐘 DB CONNECTED 🐘 🐘'))
  .catch((e) => console.log(e))
  .finally(() => client.end());

module.exports = { pool, client };
