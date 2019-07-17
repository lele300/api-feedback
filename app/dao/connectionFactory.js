const mysql = require("mysql");

function connectionDB() {
   return mysql.createConnection({
        "host" : "localhost",
        "user" : "root",
        "password" : "",
        "database" : "feedback"
   });
}

module.exports = () => {
    return connectionDB;
};