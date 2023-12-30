//const express = require app
import express from 'express';

//invoke the express
const app = express();

//GET http method
app.get('/user/all', (req: express.Request, res: express.Response) => {

    let data = {
        _id: "C001",
        username: "pathum",
        fname: "pathum",
        lname: "silva",
        email: "pathum@ijse.lk"
    }
    res.send(data);
});


app.post('/user',(req:express.Request, res:express.Response )=> {
    const req_body:any = req.body;
    console.log(req_body);

    res.send("OK!!");
});


//start the server
app.listen(8081, () => {
    console.log("Server started on port 8081");
});