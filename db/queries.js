/* eslint-disable no-console */
const { pool, client } = require('./index');

const getProducts = (productID, callback) => {
  const query = `SELECT product_info.product_id AS id, name, slogan, description, category, default_price, jsonb_agg(json_build_object('feature', features.feature, 'value', features.value)) AS features FROM product_info JOIN features ON features.product_id = product_info.product_id WHERE product_info.product_id=${productID} GROUP BY product_info.product_id;`;
  pool.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      callback(result.rows[0]);
      client.end();
    }
  });
};

const getStyles = (productID, callback) => {
  const query = `SELECT styles.style_id AS id, name, original_price, sale_price, default_style AS default, jsonb_agg (distinct jsonb_build_object('photos', photos.thumbnail_url, 'url', photos.url)) AS photos, jsonb_object_agg(skus.sku, jsonb_build_object('quantity', skus.quantity, 'size', skus.size)) AS skus FROM styles JOIN photos on photos.style_id = styles.style_id JOIN skus ON skus.style_id = styles.style_id WHERE styles.product_id=${productID} GROUP BY styles.style_id;`;
  pool.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      callback(result.rows);
      client.end();
    }
  });
};

// const query = `SELECT jsonb_agg(related.related_id) FROM related WHERE product_id=${productID};`;

const getRelated = (productID, callback) => {
  const query = `SELECT json_agg(related.related_id) AS related FROM related WHERE product_id=${productID};`;
  pool.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      callback(result.rows[0].related);
      client.end();
    }
  });
};

module.exports = { getProducts, getStyles, getRelated };
