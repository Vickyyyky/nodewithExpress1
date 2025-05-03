//! app,built-in,error,routerlevel,userdefined,third-party

const jwt=require("jsonwebtoken");
// console.log(jwt);
const userCollection=require("../models/user.models");

const authenticate=async(req,res,next)=>{
    console.log(req.cookies);
   let token= req.cookies["my-cookie"];
   console.log(token);
   if(!token){
   return  res.status(401).json({message:"please login in to access this resource"})
   }
   //? decode the token or cookie => verify()
   let decodedToken=jwt.verify(token,"secret-key");
//    console.log(decodedToken);
let id=decodedToken.payload;
let user=await userCollection.findById(id);
if(!user) return res.status(401).json({message:"Invalid Token"})

    //todo store the user details in req
    req.myUser=user;
      next();
}

module.exports={authenticate};
