//! npm: it stands for node package manager. (modules and package both are same) it is an online platform which is used to manage the packages(install,update,remove,create)
//? using this npm,we can install,update and removes the mdodules.we can also create a new modules
//! before installing any third party module,there must be packgage.json file in the source/project folder

//? to create a package.json file type this command => "npm init -y" in the terminal

//! package.json file contains the meta data of the project like(name,author,description,license,dependencies,devDependencies,etc..)


//! now we can install third party modules by using the command =>
    //? npm i/install <module_name_1 module_name_2 module_name_3........>
    //? example => npm i mongodb 
    //? example => npm i express mongodb multer


    //! import the install modules

    const mongodb=require("mongodb");
    const { MongoClient } = require("mongodb");
    // console.log(mongodb.MongoClient);


   let payload= mongodb.MongoClient.connect("mongodb://localhost:27017");
//    console.log(payload);


 let connectDB=async() =>{
//    1. //! we succesfully establish a connection with database
    let payload= await MongoClient.connect("mongodb://localhost:27017");
//     // console.log(payload.db);
//    2. //! create a database => db("database-name")
    let database =payload.db("NodeJs")
//     // console.log(database.createCollection);

    3.//! creste a collection => create Collection ("collection-name")
    let collection=await database.createCollection("nodeJsCollection");
    // console.log(collection.insertOne);

    // let data={name:"abc",id:123,age:34};
    // let op=await collection.insertOne(data);
    // await collection.insertOne({name:"def",age:35,id:234});
    // console.log("data inserted");
    
    //! Fetch the Data
    //? fetch single doc
    // let result =await collection.findOne({id:234},{name:1,_id:0}); //TODO

    // console.log(result);


    //! Fetch multiple Data
    let result=await collection.find(). toArray(); //& this toArray() is used to convert the pointer to array
    console.log(result);

    //Update and delete
    
};
connectDB();