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
app.all('/home',(req,res)=>{
res.send('hello !')
})
app.get('/home/:id', (req, res) => {
   const sid = req.params.id
   const ans = arr.find(e=>e.id==sid)
   if(ans){
    res.json(ans)
   }
   else{
    res.write("not found data:")
   }
}).listen(3000, (req, res) => {
    console.log("app is running at 3000:")
})