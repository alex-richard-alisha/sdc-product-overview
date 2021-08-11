const express = require('express');
const app = express();
const db = require('../database/index')

app.listen(3000, () => {
    console.log(`👂 👀 Listening on PORT 3000 👂 👀`);
});