const mysql =require('mysql');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.json());
var mysqlConnection=mysql.createConnection({
    host :'localhost',
    user :'root',
    password:'Am@r8106',
    database:'qudroid',
    multipleStatements:true
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB connection succeded.');
    else
    console.log('Db connection has failed\n Error:'+ JSON.stringify(err,undefined,2));
}

);
app.listen(3000,()=>console.log('express server at port 3000'));
//get the startup
app.get('/startups',(req,res)=>{
    mysqlConnection.query('select * from startups',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});
//insert the startup
app.post('/employees',(req,res)=>{
    var sql="set @startupname=?;set @startupcountry=?;\
    call startupAddOrEdit(@startupname,@startupcountry);";
    mysqlConnection.query(sql,[startups.startupname,startup.startupcountry],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        
        else
        console.log(err);
    })
});


