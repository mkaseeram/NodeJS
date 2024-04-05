// creating the sub module

import * as express from "express";


let transactions: any = express.Router();

transactions.get("/", (req: any, res: any): any => {

    res.status(200).json({ "message": "transactions soon..!" })
});

transactions.get("/pierre", (req: any, res: any): any => {
    res.status(200).json({ message: "welcome to pierre for nodejs" })
});


export default transactions;