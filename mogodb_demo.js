const mongoose  = require('mongoose')

mongoose.connect('mongodb+srv://PrinceKakadiya:Prince3@cluster0.jloc4.mongodb.net/');

const Schema  = mongoose.Schema;

const student = new Schema ({
    enrollmentno : number ,
    name :String ,
    rollno : number,
    branch: String
})

const Student = mongoose.model('student', student);