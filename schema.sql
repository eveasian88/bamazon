ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'esperAnza#88';

DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id MEDIUMINT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(75) NOT NULL,
  department_name VARCHAR(75) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Twighlight Series","ENTERTAINMENT", 11.11, 100),
    ("COD","ENTERTAINMENT", 59.99, 100),
    ("Spam Lovers Sampler","GROCERY", 24.50, 50),
    ("Ray Ban Sunglasses","CLOTHING", 95.00, 50),
    ("BCBG Dress","CLOTHING", 75.25, 50),
    ("Bay Watch Towel","SPORTS & OUTDOORS", 12.12, 20),
    ("Miss Congeniality","ENTERTAINMENT", 15.50, 100),
    ("Mad Max: Fury Road","ENTERTAINMENT", 15.50, 100),
    ("Monopoly","ENTERTAINMENT", 19.50, 20),
    ("Apples to Apples","ENTERTAINMENT", 19.50, 20);

CREATE TABLE departments (
    department_id MEDIUMINT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    over_headCosts DECIMAL(10,2) NOT NULL,
    total_sales DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(department_id)
    );

INSERT INTO departments (department_name, over_headCosts, total_sales)
VALUES ('ENTERTAINMENT', 50000.00, 15000.00),
    ('ELECTRONICS', 20000.00, 12000.00),
    ('HOME', 30000.00, 15000.00),
    ('BODY & HEALTH', 3000.00, 12000.00),
    ('GROCERY', 1200.00, 15000.00),
    ('KIDS', 40000.00, 12000.00),
    ('CLOTHING', 35000.00, 15000.00),
    ('SPORTS & OUTDOORS', 12000.00, 12000.00)