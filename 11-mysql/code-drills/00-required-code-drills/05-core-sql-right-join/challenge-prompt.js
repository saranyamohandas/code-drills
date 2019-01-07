var mysql = require("mysql");

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


// RIGHT JOIN

function foodSearch() {
  // =============== Code Starts Here ===============
     var joinQuery = "SELECT B.FOODNAME,A.PROTEIN,A.CARBOHYRATES,A.FAT,A.CALORIES FROM  FOOD_INGREDIENTS AS B RIGHT JOIN FOODS_NUTRITION AS A ON A.ID = B.ID";
    var query = connection.query(joinQuery,function(err,rows){
        if(err) throw err;
        console.log(rows);
    });
    console.log(query.sql)
    
  // =============== Code Ends Here ===============
  }