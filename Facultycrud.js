const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const Faculty = require("./Faculty");

mongoose.connect("mongodb+srv://PrinceKakadiya:Prince@cluster0.jloc4.mongodb.net/Faculty").then(() => {
    console.log("Connected to MongoDB");
})

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//GET ALL
app.get('/faculties', async(req, res) => {
    const ans = await Faculty.find()
    res.send(ans)
})

//GET BY-ID
app.get('/faculties/:id', async(req, res) => {
    const faculties = await Faculty.findOne({id:req.params.id})
    res.send(faculties)
})

//INSERT NEW DATA
app.post('/faculties', async(req, res) => { 
    const faculties = new Faculty({...req.body})
    await faculties.save()
    res.send(faculties)
})

//UPDATE
app.patch('/faculties/:id', async(req, res) => {
    const faculties = await Faculty.findOne({id:req.params.id})
    faculties.name = req.body.name
    faculties.password = req.body.password
    faculties.department = req.body.department
    faculties.email = req.body.email
    faculties.save()
    res.send(faculties)
})

//DELETE 
app.delete('/faculties/:id', async(req, res) => {
    const faculties = await Faculty.findOneAndDelete({id:req.params.id})
    res.send(faculties)
    })

app.listen(3000, () => {
    console.log("server conected @ 3000:")
})