/* eslint-disable no-console */
const express = require('express');
const router = require('./routes');
require('./server')

const app = express();

app.listen(3000, () => {
  console.log('👂 👀 Listening on PORT 3000 👂 👀');
});

app.use(express.json());

app.use('/api', router);
