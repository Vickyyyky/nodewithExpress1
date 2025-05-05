//! 1 destructure routers from express
//! 2 call the top level function
//! 3 export it

const{Router}=require("express");
const{createBlog, fetchAllBlogs, fetchOneBlog, updateBlog, deleteBlog}=require("../controller/blog.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");
const router=Router();
router.post("/create",authenticate,createBlog); //? injecting the miidleware
      // ? router level middleware
router.get("/fetch",authenticate,fetchAllBlogs);
router.get("/fetchone/:id",authenticate,fetchOneBlog);
router.patch("/updateone/:id",updateBlog);
router.delete("/delete/:id",deleteBlog)
module.exports=router;