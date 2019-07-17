const express = require("express");
const validator = require("express-validator");
const bodyParser = require("body-parser");
const consign = require("consign");

module.exports = () => {
    const app = express();
    app.set("view engine", "ejs");
    app.set("views", "./app/views");
    app.use(express.static("./app/public"));
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
    app.use(validator());
    consign()
        .include("./app/controllers")
        .then("./app/dao")
        .into(app);
    return app;
};