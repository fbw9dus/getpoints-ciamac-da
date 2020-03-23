var express = require("express");
var app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}));

app.get('/',(req,res) =>{
res.sendStatus(200).send("Der Server Funktioniert")       
 
 })

 app.get('/api', (req,res)=>{
       res.json([{user: 'fake', password:'fake'}])
 })

 module.exports = app;