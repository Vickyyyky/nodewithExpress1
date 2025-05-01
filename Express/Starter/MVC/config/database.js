const mongoose=require("mongoose");
let connectDB=async()=> {
    await 
    mongoose.connect(process.env.MONGODB);
    console.log("Database connected");
};

module.exports={connectDB};

//& url => "mongodb://localhost:27017/formdata"
//& formdata => database name