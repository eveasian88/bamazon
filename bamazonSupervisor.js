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
        choices: ["View Product Sales by Department", "Create New Department", "End Session"]

    }]).then(function (ans) {
        
        switch (ans.doThing) {
            case "View Product Sales by Department": viewProductByDept();
                break;
            case "Create New Department": createNewDept();
                break;
            case "End Session": console.log('Bye!');
        }
    });
}





start();