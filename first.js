

const http = require('http');
const server = http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url + " hello ");
    res.end();
})

server.listen(3000, ()=>{
console.log("server is running at 3000: ")
});