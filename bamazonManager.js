// require mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");

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
            case "End Session": console.log('Bye!');
        }
    });
}








start();