const router = require('express').Router();
const queries = require('../db/queries');

router.get('/products/:product_id', (req, res) => {
  queries.getProducts(req.params.product_id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.get('/products/:product_id/styles', (req, res) => {
  queries.getStyles(req.params.product_id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
