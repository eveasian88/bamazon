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
