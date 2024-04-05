// import express module

import * as express from "express";

let app: any = express();

// app object used to develop the rest services

//get request
app.get("/ashokit", (req: any, res: any): any => {
    res.status(200).json({ "message": "welcome to type script with nodejs" });
});


//assign the port
app.listen(8080, () => {
    console.log("server started successfully")
});