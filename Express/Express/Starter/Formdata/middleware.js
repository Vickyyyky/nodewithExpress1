let express=require("express");
let app=express();

//! middleware =>
//! middlewares are function which comes in between req and res
//! also middlware has access to req object and res object
//! it has one more method => next()
//! next() calss either the next middleware or resumes the flow of execution
app.use((req,res,next) =>{
    console.log("this is sum function")
    console.log("this is middleware 1")
    req.myname="abc";
    req.userid="123445";
    next();
});

app.use((req,res,next) =>{
    console.log("this is middlware 2")
    req.lastname="def";
    next();
});
app.get("/",(req,res)=>{
    console.log(req.lastname);
    console.log(req.userid);
    console.log(req.myname,req.lastname);
    // res.send("HomePage");
    res.send("image","caption");
});

app.get("/about",(req,res)=>{
    res.send("AboutPage");
});

app.listen(9000,(err)=>{
    if(err) console.log(err);
    console.log("server running at port 9000")
});


//! We have total 5 types of middleware
//? 1 Built-In Middleware=>
//? 2 User-Defined Middleware=>
//? 3 Error Middleware
//? 4 Router Level Middleware
//? 5 App level Middleware