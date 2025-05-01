//! 1 import mongoose library
//! 2 define a schema/structure
//! 3. create a model(collection) and export it

const{Schema,model}=require("mongoose")
let blogSchema=new Schema(
    {
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        minlength:10,
        required:[true,"Description is required and should be of minimum 10 characters"],
    },
    // createdBy:{}, //TODO
},
{timestamps:true});

module.exports=model("Blog",blogSchema)
