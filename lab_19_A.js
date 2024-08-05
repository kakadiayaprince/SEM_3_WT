const express = require('express');

 const app =express()

 app.get('/',  (req,res)=>{
    res.send("hello world")
 }).listen(3000,(req,res)=>{
    console.log("app is running at 3000:")
 })