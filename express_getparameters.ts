// read get parameters in express js

import * as express from "express";

let app: any = express();

app.get("/sample/user/:uname/pwd/:upwd", (req: any, res: any): any => {
    // let uname = req.params.uname;
    // let upwd = req.params.upwd;
    // console.log(uname, upwd);
    if(req.params.uname==="ashokit"&&req.params.upwd==="123"){
        res.send({login:"success"});
    }else{
        res.send({login:"failed"})
    }
});
app.listen(8080, () => {
    console.log("server started");
});

//http://localhost:8080/sample/user/ashokit/pwd/123