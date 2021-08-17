/* eslint-disable no-console */
const express = require('express');
const router = require('./routes');
const cors = require('cors');
require('./server')

const app = express();

app.use(cors({
  origin: '*'
}));

app.listen(3000, () => {
  console.log('👂 👀 Listening on PORT 3000 👂 👀');
});

app.use(express.json());

app.use('/api', router);
