//! streams => sending data from source to destination in continuous chunks or pieces is called streaming
//any one chunk will be called chunks


// in node js we have 4 types of streaming 
//? 1. writeable stream => using this stream we can write the data in continous chunks
//? 2. readable stream => using this stream we can read the data in continous chunks
//? 3. duplex stream=> we can perform both read anmd write simultaneously or at the same time
//? 4. transform stream => similat to duplex but the data can be modified

let fs=require("fs")
// let read=fs.createReadStream("./Pages/index.html",{highWaterMark:20});


// read.on
 //! emit() :=> it is used to generate coustom events
    //? syntax => emit("event-name",data)
    //! on() :=> it is used to listen to coustom ebvents
    //? syntax => on("event-name",()=>{})



//! writable streams ================== =>
    // const { log } = require("console");
// let fs=require("fs");
// let output=fs.createWriteStream("streame.txt");
//     console.log(output); //? object =>writeStream


    //! create writestream()=> will generate an event =>"data"

    // output.on("data",()=>{
    //     //! this is used for reading the context
    //     console.log("file created");
        
    // });

    // output.write("this is message from writable stream", (err)=>{
    //     if(err) console.log(err);
    //     console.log("data written")
    // });


// let result=fs.createReadStream("streame.txt","utf-8");
// console.log(result);



// result.on("data",(chunk)=>
// {
//     console.log(chunk);
// });






//! 3. ============================duplex stream ==================

let read =fs.createReadStream("./Node/Modules/Built-in/Pages/index.html","utf-8");
let write = fs.createWriteStream("streame.txt");
read.pipe(write);









   
    