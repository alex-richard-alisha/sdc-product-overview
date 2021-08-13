/* eslint-disable no-console */
const db = require('./index');

const getProducts = (productID, callback) => {
  const query = `SELECT product_info.product_id AS id, name, slogan, description, category, default_price, jsonb_agg(json_build_object('feature', features.feature, 'value', features.value)) AS features FROM product_info JOIN features ON features.product_id = product_info.product_id WHERE product_info.product_id=${productID} GROUP BY product_info.product_id;`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      callback(result.rows[0]);
      db.end();
    }
  });
};

const getStyles = (productID, callback) => {
  const query = `SELECT styles.style_id AS id, name, original_price, sale_price, default_style AS default, jsonb_agg(json_build_object('photos', photos.thumbnail_url, 'url', photos.url)) AS photos FROM styles JOIN photos ON photos.style_id = styles.style_id WHERE styles.product_id=${productID} GROUP BY styles.style_id`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      callback(result.rows[0]);
      db.end();
    }
  });
};

module.exports = { getProducts, getStyles };
