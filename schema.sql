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
VALUES ("Twighlight Series","ENTERTAINMENT", 11.11, 111),
	("Miss Congeniality","ENTERTAINMENT", 15.75, 50),
	("Ray Ban Aviators","CLOTHING", 99.99, 5),
    ("BCBG Maxi Dress","CLOTHING", 75.25, 50),
    ("Chocolate Lovers Sampler","GROCERY", 24.95, 50),
    ("COD Black Ops","ENTERTAINMENT", 59.99, 100),
    ("Mad Max: Fury Road","ENTERTAINMENT", 15.75, 50),
    ("Moxie Roller Skates","SPORTS & OUTDOORS", 222.22, 10),
    ("Monopoly","ENTERTAINMENT", 11.50, 20),
    ("Scrabble","ENTERTAINMENT", 29.50, 20);

CREATE TABLE departments (
    department_id MEDIUMINT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    overhead_costs DECIMAL(10,2) NOT NULL,
    total_sales DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(department_id)
    );

INSERT INTO departments (department_name, overhead_costs, total_sales)
VALUES ('ENTERTAINMENT', 50000.00, 15000.00),
    ('ELECTRONICS', 20000.00, 12000.00),
    ('HOME', 30000.00, 15000.00),
    ('BODY & HEALTH', 3000.00, 12000.00),
    ('GROCERY', 1200.00, 15000.00),
    ('KIDS', 40000.00, 12000.00),
    ('CLOTHING', 35000.00, 15000.00),
    ('SPORTS & OUTDOORS', 12000.00, 12000.00)