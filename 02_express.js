let express = require("express");

//creating REST object
let app = express();

//where app object is the rest object
// where app object is used to develop the rest services

//get request

app.get("/", (req, res) => {

    res.status(200).json({ "message ": "default get request..!" });
});

app.get("/demo", (req, res) => {
    res.status(200).json({ "message": "data from SQL database soon...!" });
});

app.post("/", (req, res) => {
    res.status(200).json({ "message": "default post request" });
});

app.post("/demo", (req, res) => {
    res.status(200).json({ "message": "data from mongodb database soon..!" })
})


app.listen(8080, () => {
    console.log("server started")
});

// http://localhost:8080/      (get) (post)

// http://localhost:8080/demo  (get) (post)