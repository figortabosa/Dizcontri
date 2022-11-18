var express = require('express')
var cors = require('cors')
var app = express()


app.use((req,res,next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

