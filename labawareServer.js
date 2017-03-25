var express = require('express')
var app = express()
var path = require("path");
var fs = require('fs'); // this allow file sharing.
var cors = require('cors'); //this lib allows cross domain requests to happen.
var cookieParser = require('cookie-parser'); // this is required to read cookies.
var usersAPI = require("./public/usersAPI");

var sql = require("seriate"); // MS SQL server data access.

var config = { // access to SQL Server database.
    "host": '127.0.0.1',
    "user": 'sa',
    "port": '7555',
    "password": 'Password_1',
    "database": 'LabCommSQL'
};

sql.setDefaultConfig(config);

usersAPI.register(app);

//varify the labcomm.js page is being read.
function reportStatusLabComm() {
    console.log("labcommsql.js is active");
}

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/labawareHome.html'));
    //__dirname : It will resolve to your project folder.
});

app.use(express.static(path.join(__dirname + '/public')));
eval(fs.readFileSync('public/functions.js') + '');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors()); // setup server to use cors
app.options('*', cors()); // allow all pre-flight options

app.listen(3000, function() {
    console.log('server listening on port 3000.');
    console.log(reportStatus());
})