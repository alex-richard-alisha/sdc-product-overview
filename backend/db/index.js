const db = require('mongoose');
const assert = require('assert');

const url = 'mongodb://3.19.142.210:27017/sdc';
// const url = 'mongodb://localhost:27017/gwb';

db.connect(url, { useUnifiedTopology: true }, ((err) => {
    assert.equal(null, err);
    console.log('🥁🥁 MONGOBONGO CONNECTED! 🥁🥁')
  }));

module.exports = {db}

