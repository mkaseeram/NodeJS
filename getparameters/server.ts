// http://localhost:8080/login?uname=admin&upwd=admin

//importing express module
import * as express from "express";




//rest services: GET POST PUT DELETE...
let app: any = express();

//authorization
let auth = (req: any, res: any, next: any): any => {

    let allHeaders = req.headers;

    if (allHeaders.authorization === "ashokIT") {
        next();
    } else {
        res.status(500).json({ auth: "fail" })
    }
}

//get request
app.get("/login", (req: any, res: any): any => {
    //authentication
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({ login: "success" });
    } else {
        res.status(401).json({ login: "fail" })
    }
});

//default request

app.get("/", (req: any, res: any): any => {
    res.sendFile(__dirname + "\\index.html")
})

app.listen(8080, () => {
    console.log("server started")
});