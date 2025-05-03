//? mongoose => it is an ODM(object data modelling ) library for mongodb and nodejs,it simplifies the processs of working with mongodb by providing functionalities like 
//& schema=> we define the structure of the document,data validation,CRUD Operations etc..
//& data validation => data is checked against schema,
//& CRUD operations => create,Read,Update,Delete



//! ODM => Object data modelling it is tool that brides the gap between your code(object oriented )=> (js objects) to document based data(BSON). it converts the javascript object to mongodb document and vice versa.
//! it is library for mongodb and nodejs it simplifies the process of working



const express=require("express");
require("dotenv").config();
const cookieParser=require("cookie-parser");
//! require("dotenv")=> this will read the .env file and load all the variables to process.env(enviornment variables)
//? config() => this willl parse the .env file

// console.log(process.env)
const {connectDB} = require("./config/database")
const userRoutes=require("./routes/user.routes");
const blogRoutes=require("./routes/blog.routes");

connectDB();
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json()) //this will parse json data
app.use(cookieParser()); // this will parse cookie data and will give some utilities to interact with cookies



app.use("/v1/users",userRoutes);
app.use("/v1/blogs",blogRoutes)

//Todo /v1/users api versioning




app.listen(process.env.PORT,(err)=>{
    if(err) console.log(err);
    console.log("server running at port 9001")
});