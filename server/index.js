/* eslint-disable no-console */
const express = require('express');
const db = require('../db/index');

const app = express();

app.listen(3000, () => {
  console.log('👂 👀 Listening on PORT 3000 👂 👀');
});

// const query = 'SELECT * FROM product_info WHERE product_id = 1;';
// db.query(query, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result.rows[0]);
//     db.end();
//   }
// });

const query1 = 'SELECT product_info.product_id AS id, name, slogan, description, category, default_price, jsonb_agg(json_build_object(\'feature\', features.feature, \'value\', features.value)) AS features FROM product_info JOIN features ON features.product_id = product_info.product_id WHERE product_info.product_id=1 GROUP BY product_info.product_id;';
db.query(query1, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result.rows[0]);
    db.end();
  }
});
