/* eslint-disable no-console */
const express = require('express');
const router = require('./routes');
require('./server')

const app = express();

app.listen(3000, () => {
  console.log('👂 👀 Listening on PORT 3000 👂 👀');
});

app.use(express.json());

app.get('/loaderio-999f6584a001744f4bcb128dfdf1ee66', (req, res) => {
  console.log('IO TESTING');
  res.send('loaderio-999f6584a001744f4bcb128dfdf1ee66'); 
});

app.use('/api', router);
