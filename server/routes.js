/* eslint-disable no-console */
const router = require('express').Router();
const queries = require('../db/queries');

router.get('/products/:product_id', (req, res) => {
  queries.getProducts(req.params.product_id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.get('/products/:product_id/styles', (req, res) => {
  console.log('👗 STYLES request 👕');
  queries.getStyles(req.params.product_id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(data.results[0].name);
      res.status(200).send(data);
    }
  });
});

router.get('/products/:product_id/related', (req, res) => {
  console.log('RELATED REQUEST');
  queries.getRelated(req.params.product_id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
