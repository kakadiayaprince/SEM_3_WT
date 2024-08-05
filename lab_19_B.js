const express = require('express');

 const app =express()

 app. get('/',  (req,res)=>{
    res.send("hello world")
 })
 app. get('/home',  (req,res)=>{
    res.send("hello world from home")
 })
 app. get('/about',  (req,res)=>{
    res.send("hello world from about")
 })
 app. get('/contact',  (req,res)=>{
    res.send("hello world from contact")
 })


 app.listen(3000,(req,res)=>{
    console.log("app is running at 3000:")
 })