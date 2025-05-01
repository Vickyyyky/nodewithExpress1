//! HTTP(in general)==> it is a protocol (set of rules)two or more devices are communicate with each other
//! in node js we have a built-in module called http with the help of thie module we can create a server

//! get(),post(),put(),patch(),delete()
//? get()           ==> it is used to fetch resources from a server
//? post()          ==> it is used to send data to a server
//? delete()        ==> it is used to delete resources from  the database
//? put()/patch()   ==> it is used to update the resources

//! status code==> 5 series
//? 1XX ==> informational(100: continue,101:switching protocols)
//? 2xx ==> Success (200 :ok , 201: ok and created)
//? 3xx ==> Redirection (301: moved permanently)
//? 4xx ==> Client error (400: bad request, 401: unauthorized)
//? 5xx ==> Server Error (500: internal server error)
let http=require("http");
let fs=require("fs")
// console.log(http)



//! steps to create a server
//? 1.  import http module
//? 2.  use createServer()
//? 3. assign port number to server


// let server= http.createServer((req,res) => {
//     // res.end("Hello from server");

//     //? to display anything on the output => write()
//     // res.write("this is a message from write()");
//     // res.write("this is after cycle is ended()");
//     // res.end("this is from end (),after displaying the message it will end the cycle");
//     // res.write("this is after cycle is ended()"); //this will throw error

//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.query);
//     console.log(req.host);


    
// });



// server.listen(9001,(err) => {
//     if (err) console.log("error from callback first error"+ err);
//     console.log("Server running at port 9001");
// });




//! to tap into the server,open browser and type localhost:portNumber
//! to kill the server click on terminal and press ctrl+c
//! after every modifications we have to restart the server

//! =======================Sending Html File=================================
let server=http.createServer((req,res)=> {
    res.writeHead(200,"ok",{"content-type":"text/plain"});
    let contents=fs.readFileSync("index.html","utf-8");
//     res.end(contents)
data.pipe(res);
 });


//!===========================sending CSS file ==================================



// res.writeHead(200,"ok",{"content-type":"text/css"});
//     fs.readFile("style.css","utf-8").pipe(res);
//     // if(err) console.log(err);
//     // res.end(data)
//     });




//!============================Sending Json File=================================

// server.listen(9000,(err) => {
//          if (err) console.log(err);
//       console.log("Server running at port 9000");
//     });



async function readFile(){
  let data=fs.readFileSync("./index.html","utf-8");
  return data;
}

let op=readFile();
console.log(op);








