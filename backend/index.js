const express = require('express');
const router = require('./server/routes');
require('./db/index')

const app = express();

app.listen(3000, () => {
  console.log('👂 👀 Listening on PORT 3000 👂 👀');
});

app.use(express.json());

app.get('/loaderio-3b8deab068da8dfc94c1f19cef07e77c', (req, res) => {
  console.log('IO TESTING');
  res.send('loaderio-3b8deab068da8dfc94c1f19cef07e77c'); 
});

app.use('/api', router);
