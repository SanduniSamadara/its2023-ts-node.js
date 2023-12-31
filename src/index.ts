//const express = require app
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";

//invoke the express
const app = express();

//@ts-ignore
app.use(bodyParser.json());

interface User{

    username: string,

    fname: string,

    lname: string,

    email: string
}

let users: User[] = [];

mongoose.connect("mongodb://localhost/blog");
const db = mongoose.connection;

db.on('error',(error) => {
    console.log("DB Connection error", error);
});

db.on('open',() => {
    console.log("DB Connection Started");
});

/**
*
GET http method
 */
app.get('/user/all', (req: express.Request, res: express.Response) => {

    /*let data = {
        _id: "C001",
        username: "pathum",
        fname: "pathum",
        lname: "silva",
        email: "pathum@ijse.lk"
    }*/
    res.send(users);
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