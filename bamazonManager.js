// require mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");
var chalk = require("chalk");

// create connection to database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "esperAnza#88",
    database: "bamazon_DB"
});

function start() {
    inquirer.prompt([{
        type: "list",
        name: "doThing",
        message: "What would you like to do?",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "End Session"]
    }]).then(function (ans) {
        switch (ans.doThing) {
            case "View Products for Sale": viewProducts();
                break;
            case "View Low Inventory": viewLowInventory();
                break;
            case "Add to Inventory": addToInventory();
                break;
            case "Add New Product": addNewProduct();
                break;
            case "End Session": console.log("Bye!");
        }
    });
}


// view all inventory
function viewProducts() {
    console.log(chalk.cyan("-------------------------------------------VIEWING PRODUCTS------------------------------------"));

    connection.query("SELECT * FROM products", function (error, res) {
        if (error) throw error;
        console.log(chalk.cyan("-----------------------------------------------------------------------------------------------"))

        for (var i = 0; i < res.length; i++) {
            console.log(chalk.cyan("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity));
            console.log(chalk.cyan("-----------------------------------------------------------------------------------------------"))
        }
        start();
    });
}


// view inventory lower than 5
function viewLowInventory() {
    console.log(chalk.cyan("-----------------------------------------VIEWING LOW INVENTORY---------------------------------"));

    connection.query("SELECT * FROM products", function (error, res) {
        if (error) throw error;
        console.log("-----------------------------------------------------------------------------------------------")

        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity <= 5) {
                console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
                console.log(chalk.cyan("-----------------------------------------------------------------------------------------------"));
            }
        }
        start();
    });
}


// displays prompt to add more of an item to the store and asks how much
function addToInventory() {
    console.log(chalk.cyan("------------------------------------------ADDING TO INVENTORY----------------------------------"));

    connection.query("SELECT * FROM products", function (error, res) {
        if (error) throw error;
        var itemArray = [];
        // pushes each item into an itemArray
        for (var i = 0; i < res.length; i++) {
            itemArray.push(res[i].product_name);
        }

        inquirer.prompt([{
            type: "list",
            name: "product",
            choices: itemArray,
            message: "Which item would you like to add to inventory?"
        }, {
            type: "input",
            name: "qty",
            message: "How much would you like to add?",
            validate: function (value) {
                if (isNaN(value) === false) { return true; }
                else { return false; }
            }
        }]).then(function (ans) {
            var currentQty;
            for (var i = 0; i < res.length; i++) {
                if (res[i].product_name === ans.product) {
                    currentQty = res[i].stock_quantity;
                }
            }
            connection.query("UPDATE products SET ? WHERE ?", [
                { stock_quantity: currentQty + parseInt(ans.qty) },
                { product_name: ans.product }
            ], function (error, res) {
                if (error) throw error;
                console.log("The quantity was updated.");
                start();
            });
        })
    });
}


// allows manager to add a completely new product to store
function addNewProduct() {
    console.log(chalk.cyan("-----------------------------------------ADDING NEW PRODUCT------------------------------------"));
    var deptNames = [];

    // grabs name of departments
    connection.query("SELECT * FROM departments", function (error, res) {
        if (error) throw error;
        for (var i = 0; i < res.length; i++) {
            deptNames.push(res[i].department_name);
        }
    })

    inquirer.prompt([{
        type: "input",
        name: "product",
        message: "Product: ",
        validate: function (value) {
            if (value) { return true; }
            else { return false; }
        }
    }, {
        type: "list",
        name: "department",
        message: "Department: ",
        choices: deptNames
    }, {
        type: "input",
        name: "price",
        message: "Price: ",
        validate: function (value) {
            if (isNaN(value) === false) { return true; }
            else { return false; }
        }
    }, {
        type: "input",
        name: "quantity",
        message: "Quantity: ",
        validate: function (value) {
            if (isNaN(value) == false) { return true; }
            else { return false; }
        }
    }]).then(function (ans) {
        connection.query("INSERT INTO products SET ?", {
            product_name: ans.product,
            department_name: ans.department,
            price: ans.price,
            stock_quantity: ans.quantity
        }, function (error, res) {
            if (error) throw error;
            console.log("Another item was added to the store.");
        })
        start();
    });
}

start();
