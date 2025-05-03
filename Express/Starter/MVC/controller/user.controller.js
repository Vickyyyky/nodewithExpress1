//! 1. import the collection
const { set } = require("mongoose");
const userCollection=require("../models/user.models");
const { generateToken } = require("../utils/jwt.utils");

//! Define CRUD


let addUser=async(req,res)=>{
    console.log(req.body);
    let{name,email,password,phone}=req.body;
    // todo 1st way => create()
    //    let newUser= await userCollection.create({name,email,password,phone});
   // todo 2nd way => save()
    let newUser=new userCollection({name,email,password,phone});
    await newUser.save();

    //todo json response
    res.status(201).json({
        success:true,
        message:"user added Succesfully"
    })
    // console.log(newUser);
    // res.send("User Data Added Succesfully")
};

let fetchAllUsers=async(req,res)=>{
   let users= await userCollection.find()
//    res.send(users);
res.status(200).json({
    success:true,
    message:"user added Succesfully",
    count:users.length,
    data:users
});
};
let fetchOneUser=async(req,res)=>{
    console.log(req.params);
    let extractedID=req.params.id;
    console.log(extractedID);

    let user =await userCollection.findOne({ _id:extractedID});

    if(!user){
        return res.status(404).json({message:"no user found"})
    }
    res.status(200).json({success:true,message:"user fetched succesfully",user});
    // res.send(user);
};
let updateUser=async(req,res)=>{
    console.log(req.body);
    let {id}=req.params;
    let user=await userCollection.findOne({_id:req.params.id});
    //TODO=> 404
     if(!user) return res.status(200).json({message:"no user found"});

    // let{updatedname,updatedemail,updatedpassword,updatedphone}=req.body
    // let user=await userCollection.findOne({_id:id});
    // user.name=updatedname|| user.name;
    // user.email=updatedemail || user.email;
    // user.phone=updatedphone || user.phone;
    // user.password=updatedpassword || user.password;  //assigning the value
    // await user.save();  //saving the value
    let result=await userCollection.updateOne({_id:id},{$set:req.body});
    let updatedUser=await userCollection.findOne({_id:id});
     res.status(200).json({
        success:true,
        message:"user Updated Succesfully",
        updatedUser,
        result,
    });
    // res.send("User Updated Succesfully")

};
let deleteUser=async(req,res)=>{
    let{id}=req.params;
    let user=await userCollection.findOne({_id:id})
    let name=user.name;
   let result= await userCollection.deleteOne({_id:id})
   console.log("user deleted",name);
    // res.send(`user ${name} Deleted Succesfully`);
    res.status(200).json({
        success:true,
        message:"user deleted succesfully",
        user,
        result,
    })
};

let login=async(req,res)=>{
    let{email,password}=req.body;
    let existinguser=await userCollection.findOne({email});
    if(!existinguser) return res.status(400).json({message:"email not found"});
    //? if exists check password
    let isMatch=await existinguser.comparePassword(password);
    // let isMatch={name:"abc"}
    if(!isMatch) return res.status(400).json({message:"invalid credantilas"});
    let token=await generateToken(existinguser._id);
    console.log(token);

    res.cookie("my-cookie",token,
        {maxAge:1*60*60*1000 //in milliseconds
        });

        // res.cookie("cookie-name",value,
        //     {maxAge:1*60*60*1000
        //     });

    res.status(200).json({success:true,message:"user login",token});
}

let logout=async(req,res)=>{
    res.clearCookie("my-cookie");
    res.status(200).json({success:true,message:"user logout"});
};

module.exports={
    addUser,
    fetchAllUsers,
    fetchOneUser,
    updateUser,
    deleteUser,
    login,
    logout
};

/*
[Object: null prototype] { id: '680893923c90869effb13666' }
*/


//http://localhost:9000/user/{UNIQUE_ID}=>_id
