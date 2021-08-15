/* eslint-disable no-console */
const express = require('express');
const router = require('./routes');
const path = require('path');
require('../db/index');

const app = express();

app.listen(3000, () => {
  console.log('👂 👀 Listening on PORT 3000 👂 👀');
});

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.use('/api', router);
