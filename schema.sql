ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'esperAnza#88';

DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB

USE bamazon_DB;

CREATE TABLE Products (
  item_id MEDIUMINT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(75) NOT NULL,
  department_name VARCHAR(75) NOT NULL,
  price DECIMAL (10, 2) NOT NULL,
  total FLOAT NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM Products;

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES ("The Hunger Games","ENTERTAINMENT",49.95,150),
    ("COD","ENTERTAINMENT",59.99,200),
    ("Spam Lovers Sample","GROCERY",24.50,50),
    ("Ray Ban Shades","CLOTHING",85.00,5),
    ("Acid Washed Jeans","CLOTHING",55.25,35),
    ("Bay Watch Towel","SPORTS & OUTDOORS",42.42,42),
    ("Miss Congeniality","ENTERTAINMENT",15.00,25),
    ("Mad Max: Fury Road","ENTERTAINMENT",25.50,57),
    ("Monopoly","ENTERTAINMENT",30.50,35),
    ("Apples to Apples","ENTERTAINMENT",19.95,23);

CREATE TABLE Departments(
    department_id MEDIUMINT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    over_headCosts DECIMAL(10,2) NOT NULL,
    total_sales DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(department_id));

INSERT INTO Departments(department_name, over_headCosts, total_sales)
VALUES ('ENTERTAINMENT', 50000.00, 15000.00),
    ('ELECTRONICS', 20000.00, 12000.00),
    ('HOME', 30000.00, 15000.00),
    ('BODY & HEALTH', 3000.00, 12000.00),
    ('GROCERY', 1200.00, 15000.00),
    ('KIDS', 40000.00, 12000.00),
    ('CLOTHING', 35000.00, 15000.00),
    ('SPORTS & OUTDOORS', 12000.00, 12000.00)