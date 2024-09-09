const mongoose = require("mongoose");

const Faculty = mongoose.Schema({
    name: String,
    id: Number,
    email: String,
    password: String,
    department: String,
})

module.exports = mongoose.model("Faculty",Faculty,"Faculties"); 