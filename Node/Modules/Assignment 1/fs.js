let fs = require("fs");
console.log("Start");
fs.writeFileSync("./data.txt","Hello Workd");
console.log("File is created");
 
console.log("Start");

let data = fs.readFileSync("./data.txt","hex")
console.log(data)
console.log("middle");
console.log("end")