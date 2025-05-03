//! Import the Collection
const blogCollection=require("../models/blogs.model")



//! insert a block

const createBlog=async(req,res)=>{
  try{
    let {title,description}=req.body;
    let newBlog=await blogCollection.create({title,description});
    res.status(201).json({
       success:true,
       message:"blog created succesfully",
       newBlog,
    });
  }
  catch(error){
    res.status(500).json({
        success:false,
        message:"Something went wrong while Creating Blog",
        // errorObject:error,
        errMessage:error.message,
    });
   
  }
};

//! fetching all blogs

const fetchAllBlogs=async(req,res)=>{
  try{
    let blog= await blogCollection.find()
    //    res.send(users);
    res.status(200).json({
        success:true,
        message:"user fetched Succesfully",
        count:blog.length,
        data:blog
    });
  }
  catch(error){
    res.status(500).json({
        success:false,
        message:"Something went wrong while fetching Blog",
        // errorObject:error,
        errMessage:error.message,
    });

  }
};

//! Fetching one blog
const fetchOneBlog=async(req,res)=>{
  try{
     console.log(req.params);
        let extractedID=req.params.id;
        console.log(extractedID);
    
        let blog =await blogCollection.findOne({ _id:extractedID});
    
        if(!blog){
            return res.status(404).json({message:"no user found"})
        }
        res.status(200).json({success:true,message:"user fetched succesfully",blog});
  }
  catch(error){
    res.status(500).json({
        success:false,
        message:"Something went wrong while fetching Blog",
        // errorObject:error,
        errMessage:error.message,
    });
  }
};
//! Update a blog
const updateBlog=async(req,res)=>{
  try{
   console.log(req.body);
       let {id}=req.params;
       let blog=await blogCollection.findOne({_id:req.params.id});
       //TODO=> 404
        if(!blog) return res.status(200).json({message:"no user found"});
        let result=await blogCollection.updateOne({_id:id},{$set:req.body});
            let updatedBlog=await blogCollection.findOne({_id:id});
             res.status(200).json({
                success:true,
                message:"user Updated Succesfully",
                updatedBlog,
                result,
            });
  }
  catch(error){
    res.status(500).json({
        success:false,
        message:"Something went wrong while updating Blog",
        // errorObject:error,
        errMessage:error.message,
    });
  }
};
//! delete a blog
const deleteBlog=async(req,res)=>{
  try{
   let{id}=req.params;
       let blog=await blogCollection.findOne({_id:id})
       let name=blog.name;
       const result = await blogCollection.deleteOne({ _id:id });
       console.log("blog deleted", result);
       // res.send(`user ${name} Deleted Succesfully`);
       res.status(200).json({
           success:true,
           message:"blog deleted succesfully",
           blog,
           result,
       })
  }
  catch(error){
    res.status(500).json({
        success:false,
        message:"Something went wrong while deleting Blog",
        // errorObject:error,
        errMessage:error.message,
    });
  }
};


module.exports={
    createBlog,fetchAllBlogs,fetchOneBlog,updateBlog,deleteBlog
}