"use strict";
// creating the sub module
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ "message": "transactions soon..!" });
});
transactions.get("/pierre", function (req, res) {
    res.status(200).json({ message: "welcome to pierre for nodejs" });
});
exports.default = transactions;
