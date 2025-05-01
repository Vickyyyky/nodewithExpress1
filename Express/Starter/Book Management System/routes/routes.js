
const express = require('express');
const router = express.Router(); 
const { displayHomePage,displayFormBook,displayBooks, handleFormSubmit } = require("../Controller/controllers");

router.get("/", displayHomePage);
router.get("/form", displayFormBook);
router.get("/users", displayBooks);
router.post("/api", handleFormSubmit);


module.exports=router;
