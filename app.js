<<<<<<< HEAD
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
=======
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var patientRouter = require('./routes/patients');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/patients', patientRouter)


module.exports = app;
>>>>>>> part-2
