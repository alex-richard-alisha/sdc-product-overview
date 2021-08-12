const { Pool, Client } = require('pg');

const { password } = require('../config/config.js')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'products',
    password:'password'
});

const client = new Client ({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'products',
    password: 'password'
});


client.connect()
.then(() => console.log('🐘 🐘 DB CONNECTED 🐘 🐘'))
.catch(e => console.log)
.finally(() => client.end())

// async function poolInstance() {
//     const pool = new Pool(credientials);
//     const now = await pool.query('SELECT * FROM product_info WHERE product_id = 1;');
//     await pool.end();

//     return now;
// }

// async function clientInstance() {
//     const client = new Client(credentials);
//     await client.connect();
//     const now = await client.query('SELECT * FROM product_info WHERE product_id = 1;');
//     await client.end();
  
//     return now;
//   }

//   (async () => {
//     const poolResult = await poolInstance();
//     console.log(poolResult);
  
//     // const clientResult = await clientInstance();
//     // console.log("Time with client: " + clientResult);
//   })();

module.exports = pool; 