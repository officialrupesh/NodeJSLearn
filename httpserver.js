const http = require('http');
const port = process.env.PORT || 4000 ;

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>This is what I am learning</h1> <p> Heyy this is what i am learning</p>');
})

server.listen(port,()=>{
    console.log(`sever is listening to port ${port}`)

});