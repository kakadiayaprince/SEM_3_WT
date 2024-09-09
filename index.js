const express = require('express');

const app = express()
arr = [{
    name: 'prince',
    id: 1
},
{
    name: 'kush',
    id: 2
},
{
    name: 'darshan',
    id: 3
}
]
app.all('/home', (req, res) => {
    res.send('oops! please give id ')
})
app.get('/home/:id', (req, res) => {
    const sid = req.params.id
    const ans = arr.find(e => e.id == sid)
    if (ans) {
        res.json(ans)
    }
    else {
        res.write("not found data:")
    }
})

const bodyparser = require('body-parser')
app.use(bodyparser.json({
    extended: false
}))

//post method:

app.post('/home/add', (req, res) => {
    const { id, name } = req.body;
    const ans = {
        'name': name,
        'id': id
    }
    arr.push(ans)
    res.json(arr)
})

//delete method:

app.delete('/home/delete/:id', (req, res) => {
    const {id} = req.body;
    const sid = req.params.id
    const result = arr.find(e => e.id == sid)
    if(result){
        const newarr= arr.filter(e => e.id != sid)
        res.json(newarr)
    }
    else{
        res.send("no id found:")
    }
})

app.listen(3000, (req, res) => {
    console.log("app is running at 3000:")
})