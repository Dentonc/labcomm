var sql = require("seriate");

var userLogins = function(UsersID) {
    return sql.execute({
        query: sql.fromFile("./sql/users"),
        params: {
            UserID: {
                type: sql.NCHAR,
                val: UserID
            },
        }
    });
};

var userEmails = function(emailID) {
    return sql.execute({
        query: sql.fromFile("./sql/users"),
        params: {
            userEmail: {
                type: sql.NCHAR,
                val: Email
            },
        }
    });
};

module.exports = {
    userLogins: userLogins,
    userEmails: userEmails
};