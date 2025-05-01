//! 1 destructure routers from express
//! 2 call the top level function
//! 3 export it

const{Router}=require("express");
const{createBlog, fetchAllBlogs, fetchOneBlog}=require("../controller/blog.controller");
const router=Router();
router.post("/create",createBlog);
router.get("/fetch",fetchAllBlogs);
router.get("/fetchone/:id",fetchOneBlog);
module.exports=router;