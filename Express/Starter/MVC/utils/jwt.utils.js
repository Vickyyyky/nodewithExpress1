const jwt=require("jsonwebtoken")


//! generate a token
const generateToken=async(payload)=>{
   let token= jwt.sign({payload},"secret-key",{
        expiresIn:"1d",
    });
    return token;
};
module.exports={generateToken};

//! sign({payload},"secret_key",options) is used to genrate a token based on a payload

//? payload => we pass the user data in the payload
//? secret_key => it is a secret key that is used to sign the token and also used during decoding the token
//? optipons => it is an object that contains the expiration time of the token