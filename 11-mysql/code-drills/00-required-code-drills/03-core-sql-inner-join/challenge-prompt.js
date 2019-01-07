var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port;
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",

    // 
    database: "food_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    foodSearch();
});

// INNER JOIN

// HINT - Console.log the err and res to check if the query is working

function foodSearch() {
// =============== Code Starts Here ===============
    var joinQuery = "SELECT A.ID, B.FOODNAME FROM FOODS_NUTRITION AS A INNER JOIN FOOD_INGREDIENTS AS B ON A.FOODNAME = B.FOODNAME";
    var query = connection.query(joinQuery,function(err,rows){
        if(err) throw err;
        console.log(rows);
    });
    console.log(query.sql)











// =============== Code Ends Here ===============
}