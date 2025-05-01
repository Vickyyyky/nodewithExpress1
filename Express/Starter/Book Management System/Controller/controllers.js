const fs=require("fs")
const{connectDB}=require("../config/db")

let displayHomePage=(req,res)=>{
    res.send("HomePage");
};


let displayFormBook= (req, res) => {
    // res.send("form Page");
    fs.createReadStream("./pages/index.html","utf-8").pipe(res);
  }

  let displayBooks= async(req,res)=>{
    let collection=await connectDB();
    let data=await collection.find().toArray();
    res.send(data);
  }

  let handleFormSubmit=async(req,res)=>{
    console.log(req.body);
 

  let myCollection= await connectDB();
  
  let {Title,Author,Year} =req.body
  let dataInserted= await myCollection.insertOne({Title,Author,Year});



  res.send(
    `<h3>${req.body.Title}</h3> is written by 
     <h3>${req.body.Author}</h3> in
     <h3>${req.body.Year}</h3>`
  );

  }
module.exports={displayHomePage,displayFormBook,displayBooks,handleFormSubmit}