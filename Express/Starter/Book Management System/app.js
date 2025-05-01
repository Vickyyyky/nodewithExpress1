const express = require('express');
const fs = require('fs');
const router = require('./routes/routes.js');
const{connectDB}=require("./config/db.js")
const app = express();
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3001, (err) => {
    if (err) console.log(err);
    console.log("server running at port 3001");
});
