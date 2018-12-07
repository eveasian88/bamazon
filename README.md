# bamazon

BAMAZON is an Amazon-like store front using Node.js and a MySQL Database.

## Getting Started

- Clone Repo
- Run command in Terminal or Gitbash "npm install"
- Run command depending on which mode you would like to be on:
    - Customer - "node bamazonCustomer.js"
    - Manager - "node bamazonCustomer.js"

- Run "ctrl + c" to exit out of each mode


### bamazonCustomer.js

- Prints the products in the store
- Prompts the customer to what products they would like to purchase based on ID number
- Asks the quantity of the item
    - If there is sufficient amount the product in stock, it returns the total for that purchase
    - If there isn't enough product in stock, it will tell the user that the item isn't in stock
    - If the purchase goes through, it updates the stock quantity to reflect the purchase
    - It also updates the product sales in the department MySQL Database Table



## Technologies Utilized

- Node.js
- Inquire NPM Package
- MySQL NPM Package