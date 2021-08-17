CREATE DATABASE sdc;

\c sdc;


CREATE TABLE product_info ( 
product_id SERIAL PRIMARY KEY, 
name TEXT NULL DEFAULT NULL, 
slogan TEXT NULL DEFAULT NULL, 
description TEXT NULL DEFAULT NULL, 
category TEXT NULL DEFAULT NULL, 
default_price INT NOT NULL
);

CREATE TABLE styles (
style_id SERIAL PRIMARY KEY,
product_id INT,
name TEXT NULL DEFAULT NULL, 
sale_price TEXT NULL DEFAULT NULL,
original_price INT,
default_style BOOLEAN,
CONSTRAINT fk_product
   FOREIGN KEY(product_id) 
      REFERENCES product_info(product_id) 
);

CREATE TABLE features (
style_id SERIAL PRIMARY KEY,
product_id INT,
feature TEXT NULL DEFAULT NULL, 
value TEXT NULL DEFAULT NULL,
CONSTRAINT fk_product
   FOREIGN KEY(product_id) 
      REFERENCES product_info(product_id)
);

CREATE TABLE skus (
sku SERIAL PRIMARY KEY,
style_id INT,
size TEXT NULL DEFAULT NULL, 
quantity INT,
CONSTRAINT fk_styles
   FOREIGN KEY(style_id) 
      REFERENCES styles(style_id)        
);

CREATE TABLE photos (
id INT PRIMARY KEY,
style_id INT NOT NULL,
url TEXT NULL DEFAULT NULL, 
thumbnail_url TEXT NULL DEFAULT NULL, 
CONSTRAINT fk_styles
   FOREIGN KEY(style_id) 
      REFERENCES styles(style_id)        
);

CREATE TABLE related (
id INT PRIMARY KEY,
product_id INT,
related_id INT,
CONSTRAINT fk_product
   FOREIGN KEY(product_id) 
      REFERENCES product_info(product_id)
);


COPY product_info
FROM '/seed/product.csv'
DELIMITER ',' CSV HEADER;

COPY styles
FROM '/seed/styles.csv'
DELIMITER ',' CSV HEADER;

COPY features
FROM '/seed/features.csv'
DELIMITER ',' CSV HEADER;

COPY skus
FROM '/seed/skus.csv'
DELIMITER ',' CSV HEADER;

COPY photos
FROM '/seed/photos.csv'
DELIMITER ',' CSV HEADER;

COPY related
FROM '/seed/related.csv'
DELIMITER ',' CSV HEADER;

CREATE INDEX style_idx ON styles (style_id);
CREATE INDEX product_idx ON styles (product_id);
CREATE INDEX stylePhoto_idx ON photos (style_id);
CREATE INDEX styleSku_idx ON skus (style_id);

CREATE INDEX productFeatures_idx ON features (product_id);

CREATE INDEX productRelated_idx ON related (product_id);

