'use strict'
const express = require("express");
const fs = require('fs');

const app = express();
//
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

//data
const users = [
    {id:1, name:'Hong'},
    {id:2, name:'Kim'},
    {id:3, name:'Lee'},
    {id:4, name:'Park'},
];

app.get("/", (req, res)=>{
    res.send("Hello express");
});
app.get('/api/users', (req, res)=>{
    res.send({ok: true, users: users});
});
app.get('/api/user', (req,res)=>{
    const userId = req.query.user_id;
    const user = users.filter(user=>user.id == userId);
    if(user && user.length == 1){
        res.send({ok: true, user: user});
    }else{
        res.send({ok: false, user: undefined});
    }
});
app.get('/api/data', (req,res)=>{
    let fname = req.query.fname;
    fname = 'data/' + fname + '.json';
    fs.readFile(fname, 'utf-8', (err, data)=>{
        if(err){
            res.send({ok: false, data: undefined});
        }else{
            let json = JSON.parse(data);
            res.send({ok: true, data: json});
        }
    });
});
//run
app.listen(3000, ()=> console.log('node express sever run on port 3000'));
