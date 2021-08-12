/* eslint-disable no-console */
const express = require('express');
require('../db/index');

const app = express();

app.listen(3000, () => {
  console.log('👂 👀 Listening on PORT 3000 👂 👀');
});

const query = 'SELECT * FROM styles WHERE product_id = 1;';
db.query(query, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
    db.end();
  }
});
