const express = require('express');
const fs = require('fs')

 const app =express()

 app. get('/',  (req,res)=>{
let data = fs.readFile('frist.txt', function(err, data) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(data);
   return res.end();
 });
 })

 app. get('/html',  (req,res)=>{
   let data = fs.readFile('demo.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
    })

    app.listen(3000,(req,res)=>{
      console.log("app is running at 3000:")
   })