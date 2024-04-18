"use strict";
// read get parameters in express js
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/sample/user/:uname/pwd/:upwd", function (req, res) {
    var uname = req.params.uname;
    var upwd = req.params.upwd;
    console.log(uname, upwd);
    if (req.params.uname === "ashokit" && req.params.upwd === "123") {
        res.send({ login: "success" });
    }
    else {
        res.send({ login: "failed" });
    }
});
app.listen(8080, function () {
    console.log("server started");
});
//http://localhost:8080/sample/user/ashokit/pwd/123
