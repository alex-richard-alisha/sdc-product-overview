COPY product_info
FROM '/home/richcuff/Downloads/product.csv'
DELIMITER ',' CSV HEADER;

COPY styles
FROM '/home/richcuff/Downloads/styles.csv'
DELIMITER ',' CSV HEADER;

COPY features
FROM '/home/richcuff/Downloads/features.csv'
DELIMITER ',' CSV HEADER;

COPY skus
FROM '/home/richcuff/Downloads/skus.csv'
DELIMITER ',' CSV HEADER;

COPY photos
FROM '/home/richcuff/Downloads/photos.csv'
DELIMITER ',' CSV HEADER;

COPY related
FROM '/home/richcuff/Downloads/related.csv'
DELIMITER ',' CSV HEADER;

CREATE INDEX style_idx ON styles (style_id);
CREATE INDEX product_idx ON styles (product_id);
CREATE INDEX stylePhoto_idx ON photos (style_id);
CREATE INDEX styleSku_idx ON skus (style_id);

explain analyze SELECT styles.style_id AS id, name, original_price, sale_price, default_style AS default, jsonb_agg (distinct jsonb_build_object('photos', photos.thumbnail_url, 'url', photos.url)) AS photos, jsonb_object_agg(skus.sku, jsonb_build_object('quantity', skus.quantity, 'size', skus.size)) AS skus FROM styles JOIN photos on photos.style_id = styles.style_id JOIN skus ON skus.style_id = styles.style_id WHERE styles.product_id=1 GROUP BY styles.style_id;


CREATE INDEX productFeatures_idx ON features (product_id);
explain analyze SELECT product_info.product_id AS id, name, slogan, description, category, default_price, jsonb_agg(json_build_object('feature', features.feature, 'value', features.value)) AS features FROM product_info JOIN features ON features.product_id = product_info.product_id WHERE product_info.product_id=1 GROUP BY product_info.product_id;


CREATE INDEX productRelated_idx ON related (product_id);
explain analyze SELECT json_agg(related.related_id) AS related FROM related WHERE product_id=1;

