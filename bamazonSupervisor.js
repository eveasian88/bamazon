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

// view product sales by department
function viewProductByDept() {
    // prints the items for sale and their details
    connection.query('SELECT * FROM departments', function (error, res) {
        if (error) throw error;
        console.log('>>>>>><<<<<>>>>><<<<<```````PRODUCT SALES BY DEPARTMENT```````<<<<<<>>>>><<<<<>>>>><<<<<>>>>>');
        console.log("---------------------------------------------------------------------------------------------")

        for (var i = 0; i < res.length; i++) {
            console.log(chalk.cyan("Department ID: " + res[i].department_id + " | " + "Department Name: " + res[i].department_name + " | " + "Over Head Cost: " + (res[i].overhead_costs).toFixed(2) + " | " + "Product Sales: " + (res[i].total_sales).toFixed(2) + " | " + "Total Profit: " + (res[i].total_sales - res[i].overhead_costs).toFixed(2)));
            console.log("---------------------------------------------------------------------------------------------")
        }
        start();
    })
}

// create a new department
function createNewDept() {
    console.log('>>>>>>Creating New Department<<<<<<');
    // prompts to add deptName and numbers. if no value is then by default = 0
    inquirer.prompt([
        {
            type: "input",
            name: "department_name",
            message: "Department Name: "
        }, {
            type: "input",
            name: "overhead_cost",
            message: "Over Head Cost: ",
            default: 0,
            validate: function (val) {
                if (isNaN(val) === false) { return true; }
                else { return false; }
            }
        }, {
            type: "input",
            name: "product_sales",
            message: "Product Sales: ",
            default: 0,
            validate: function (val) {
                if (isNaN(val) === false) { return true; }
                else { return false; }
            }
        }
    ]).then(function (ans) {
        connection.query('INSERT INTO departments SET ?', {
            DepartmentName: ans.department_name,
            OverHeadCosts: ans.overhead_costs,
            TotalSales: ans.prodSales
        }, function (error, res) {
            if (error) throw error;
            console.log('Another department was added.');
        })
        start();
    });
}

start();

// create new product, product sale throws an error