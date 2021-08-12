const getFeatures = (callback) => {
  const query = 'SELECT product_info.product_id AS id, name, slogan, description, category, default_price, jsonb_agg(json_build_object(\'feature\', features.feature, \'value\', features.value)) AS features FROM product_info JOIN features ON features.product_id = product_info.product_id WHERE product_info.product_id=1 GROUP BY product_info.product_id;';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result.rows[0]);
      db.end();
    }
  });
};
