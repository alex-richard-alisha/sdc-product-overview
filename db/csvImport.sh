COPY product_info
FROM '/home/richcuff/Downloads/product.csv'
DELIMITER ',' CSV HEADER;

COPY styles
FROM '/home/richcuff/Downloads/styles.csv'
DELIMITER ',' CSV HEADER;

COPY features
FROM '/home/richcuff/Downloads/features.csv'
DELIMITER ',' CSV HEADER;

COPY inventory
FROM '/home/richcuff/Downloads/skus.csv'
DELIMITER ',' CSV HEADER;

COPY photos
FROM '/home/richcuff/Downloads/photos.csv'
DELIMITER ',' CSV HEADER;

ALTER DATABASE name RENAME TO products_dev;