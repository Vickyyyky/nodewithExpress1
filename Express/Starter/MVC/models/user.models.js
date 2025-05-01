//! 1 import mongoose library
//! 2 define a schema/structure
//! 3. create a model(collection) and export it

//! 1.
const mongoose=require("mongoose");
const bcryptjs=require("bcryptjs");
//! 2.
let userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
             required:true, // =>without this field ,data will not get stored
        },
        email:{
            type:String,
            required:true,
            unique: true,  //=> this ensure no duplicates are allowed
        },
        password:{
            type:String,
            required:[true,"password is required and min length is 5"],
        },
        phone:{
            type:Number,
        },
    },

    {
    timestamps:true, //createdAt and UpdatedAt
   }
    );

    //! pre-hook=> pre means before something=> before saving data (any new resource is created)
    userSchema.pre("save",async function(){
        // this will generate a salt of lenght 10
        let salt = await bcryptjs.genSalt(10);
        //? hash the password
        let hashedpassword =await bcryptjs.hash(this.password,salt);
        //? assigning the hashed password
        this.password=hashedpassword;
    });
    //! creating a method to compare password 
    userSchema.methods.comparePassword=async function(enteredPassword){
        return await bcryptjs.compare(enteredPassword,this.password);
    };



//! 3.  with the help of model() we are creating a collection based on the structure
module.exports=mongoose.model("User",userSchema);
//? collection_name=> users(plural+lowecase)
