var users = require("./users");

module.exports = {
    register: function(app) {
        app.post('/usersAPI', function(req, res, next) {
            var UsersID = req.body.UsersID;

            users.userLogins(UsersID)
                .then(function(response) {
                    res.send(response);
                }, function(err) {
                    console.log("Something bad happened:", err);
                    res.send('RETRIEVE_BY_ID_FAIL')
                });
        });

        app.post('/usersAPI', function(req, res, next) {
            var emailID = req.body.emailID;

            users.userLogins(emailID)
                .then(function(response) {
                    res.send(response);
                }, function(err) {
                    console.log("Something bad happened:", err);
                    res.send('RETREIVE_BY_ID_FAIL')
                });
        });
    }
};