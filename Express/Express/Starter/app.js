//! frameworks === it is the collection of libraries
//! differnce between frameworks and library

//! nodeJs frameworks +> expressjs,sailsjs,meteorjs,Derbyjs


//! mern => nextjs,nest/angular,express(popular)
// next js= frontend/backend,nestjs/angular=>frontend, express=> backend


//? express => it is the framework for nodejs through which we can build a server side applications
//? side applications(which are scalable)

//! 1. we should have a package.json file in our root project and there should be only one package.json file in our project
//!=> to create a package.json file,command
//? npm init -y => it will create a package.json file in our root project with the default values
//? npm init(npm initialize) => this will create a package.json file in our root project with the user defined values.


//! it stores project details like name,version,description,author along with dependencies(producttion and development)

//? further we have two types of dependencies
//? productuon and development


//!2. install required packages/modules
//? npm i/install module_name
//? npm i module_name1 module_name2 ..............


//! 3. import the installed modules
let express=require("express");
// console.log(express);

//! this is also known as calling/invoking top level functions
let app=express();
// console.log(app);


//! Routing
//? "/" =>route
app.get("/",(req,res)=>{
    res.send("Hello World");
});
//? about page
app.get("/about",(req,res)=>{
    res.send("Vicky Singh")
});

app.get("/hello",(req,res)=>{
    res.send("Vishal Kumar")
});

// app.post("endpoint",cb);
// app.patch("endpoint",cb);
// app.put("endpoint",cb);
//  app.delete("endpoint",cb);




//! assign a port number
app.listen(9000,(err)=>{
    if(err) console.log(err);
    console.log("server running at port 9000")
});

//! random => it will automatically restart our server if we make ny change

// npm i nodemon --D (this will bw installed in devdependencies => which means it will not installed in  production)


//? nodemon filename.js