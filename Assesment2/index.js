const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.end("Hello, world!");
})

server.listen(8000,(err)=>{
    if(err) console.log(err);
    console.log("Server listening at port no 8000")
})



// const server = http.createServer((req, res) => {
//    if(req.url=="/"){
//     res.end("Hello, world!");
//    }
//    else{
//     res.end("404 not found!");
//    }
// })

// server.listen(8000,(err)=>{
//     if(err) console.log(err);
//     console.log("Server listening at port no 8000")
// })






//  const server = http.createServer((req, res) => {
//    if(req.method==='GET'){
//     if(req.url==="/json"){
//         res.writeHead(200,"ok",{'Content-Type':"text/json"});
//         fs.createReadStream("./data.json","utf-8").pipe(res);
//     }
//     else if (req.url==="/contact"){
//         res.writeHead(200,"ok",{'Content-Type':"text/html"});
//         res.end("Contact us page");
//     }      
//    }
//    else{
//     console.log("404")
//    }

// })

// server.listen(8000,(err)=>{
//     if(err) console.log(err);
//     console.log("Server listening at port no 8000")
// })