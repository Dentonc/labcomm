var sql = require("seriate");

var config = {
    "host": '127.0.0.1',
    "user": 'sa',
    "port": '7555',
    "password": 'Password_1',
    "database": 'LabCommSQL'
};

sql.setDefaultConfig ( config );

sql.execute( {
    query: "SELECT * FROM Users_table"
} ).then( function( results ) {
    console.log( results );
}, function( err ) {
    console.log( "Something bad happened:", err );
} );

//varify the labcoom.js page is being read.
function reportStatusLabComm() {
console.log("labcommsql.js is active");
}