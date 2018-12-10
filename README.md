# bamazon

BAMAZON is an Amazon-like store front using Node.js and a MySQL Database.

## Getting Started

- Clone Repo
- Run command in Terminal "npm install"
- Run command depending on which mode you would like to be on:
    - Customer - "node bamazonCustomer.js"
    - Manager - "node bamazonCustomer.js"
    - Supervisor - "node bamazonSupervisor.js"

- Run "ctrl + c" to exit out of each mode


### bamazonCustomer.js

- Prints the products in the store for the customer
- Prompts the customer to what products they would like to purchase based on ID number
- Asks the quantity of the item

    - If there is sufficient amount of product in stock, the customer receives a total for that purchase and the sale is successful.
    - If there isn't enough product in stock, the customer is told that the item isn't in stock.
    - If the purchase goes through, it updates the stock quantity to reflect the purchase.
    - It also updates the product sales in the department MySQL Database Table.


### bamazonManager.js

- Starts with a Menu
- Prompts the manager to select what they would like to do:
    - View Products for Sale
    - View Low Inventory
    - Add to Inventory
    - Add New Product
    - End Session

- If the manager selects "View Products for Sale", it lists all of the products in the store, including all the details.

- If the manager selects "View Low Inventory", it lists all of the products with less than 5 items in stock.

- If the manager selects "Add to Inventory", it allows the manager to select a product and add new quantity to the inventory.

- If the manager selects "Add New Product", it allows the manager to add a new item for sale to the store.

- If the manager selects "End Session", it ends the session by not going back to the menu and the manager exits the program.


### bamazonSupervisor.js

- Starts with a Menu
- Prompts the supervisor to select what they would like to do:
    - View Product Sales by Department
    - Create New Department
    - End Session


- If the supervisor selects "View Product Sales by Departmnet", it lists the Department Sales and calculates the total sales from the overhead cost and product sales.

- If the supervisor selects "Create New Department, it allows the manager to create a new department and input current overhead costs and product sales.

- If the supervisor selects "End Session, the session ends by not going back back to the menu and the manager exits the program.


## Technologies Utilized

- JavaScript
- Node.js
- Inquire NPM Package
- MySQL NPM Package


### Authors

- Susye Weng-Reeder *JS/ Node.js/ MySQL* [Susye Weng-Reeder](https://eveasian88.github.io/Professional-Portfolio/ "Susye's Portfolio")