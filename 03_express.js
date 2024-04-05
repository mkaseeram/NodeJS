"use strict";
// import express module
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
// app object used to develop the rest services
//get request
app.get("/ashokit", function (req, res) {
    res.status(200).json({ "message": "welcome to type script with nodejs" });
});
//assign the port
app.listen(8080, function () {
    console.log("server started successfully");
});
