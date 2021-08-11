const { Pool, Client } = require('pg');

const { password } = require('../config/config.js')

const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'products',
    password,
    port: 5432,
});

connection.connect(() => {
    console.log('🐘 🐘 DB CONNECTED 🐘 🐘')
});

module.exports = { connection }