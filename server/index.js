/* eslint-disable no-console */
const express = require('express');
const router = require('./routes');
const { Pool, Client } = require('pg');

const app = express();

const pool = new Pool({
  user: 'postgres',
  host: 'sdc-postgres',
  port: 5432,
  database: 'sdc',
  password: 'password',
});

const client = new Client({
  user: 'postgres',
  host: 'sdc-postgres',
  port: 5432,
  database: 'sdc',
  password: 'password',
});

pool.connect()
.then(() => console.log('🐘 🐘 DB CONNECTED 🐘 🐘'))
.catch((e) => console.log(e))
  .finally(() => client.end());

app.listen(3000, () => {
  console.log('👂 👀 Listening on PORT 3000 👂 👀');
});

app.use(express.json());

app.use('/api', router);

module.exports = {pool, client}