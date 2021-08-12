DROP TABLE IF EXISTS product_info, styles, features, photos, inventory;

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

CREATE TABLE inventory (
style_id SERIAL PRIMARY KEY,
product_id INT,
size TEXT NULL DEFAULT NULL, 
quantity INT,
CONSTRAINT fk_product
   FOREIGN KEY(product_id) 
      REFERENCES product_info(product_id),
CONSTRAINT fk_styles
   FOREIGN KEY(style_id) 
      REFERENCES styles(style_id) 
);

CREATE TABLE photos (
id SERIAL PRIMARY KEY,
style_id INT NOT NULL,
url TEXT NULL DEFAULT NULL, 
thumbnail_url TEXT NULL DEFAULT NULL, 
CONSTRAINT fk_styles
   FOREIGN KEY(style_id) 
      REFERENCES styles(style_id)        
);

