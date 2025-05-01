
let os=require("os");
// console.log(os);
console.log(os.hostname());
console.log(os.totalmem()/(1024*1024*1024));
console.log(os.freemem() / (1024*1024*1024));
console.log(os.cpus().length);
console.log(os.platform());
console.log(os.uptime()/(60*60));
console.log(os.userInfo());


