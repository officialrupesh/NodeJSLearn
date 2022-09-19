// const {console} = require('console');
const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 2000 ;


const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    if(req.url =='/home'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if(req.url =='/rupesh'){
        res.statusCode = 200;
        res.end('<h1>This is what I am learning</h1> <p> May be not </p>');
    }
    else if(req.url =='/about'){
        res.statusCode = 200;
        res.end('<h1>Hey this is about rupesh raut learning</h1>');
    }
    else{
            // res.rupesh();
            res.statusCode = 404;
            res.end('<h1>Sorry the page you requested cannot be found</h1>');
        }
})

server.listen(port,()=>{
    console.log(`sever is listening to port ${port}`)

});