"use strict";
// http://localhost:8080/login?uname=admin&upwd=admin
Object.defineProperty(exports, "__esModule", { value: true });
//importing express module
var express = require("express");
//rest services: GET POST PUT DELETE...
var app = express();
//authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.authorization === "ashokIT") {
        next();
    }
    else {
        res.status(500).json({ auth: "fail" });
    }
};
//get request
app.get("/login", function (req, res) {
    //authentication
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(401).json({ login: "fail" });
    }
});
//default request
app.get("/", function (req, res) {
    res.sendFile(__dirname + "\\index.html");
});
app.listen(8080, function () {
    console.log("server started");
});
