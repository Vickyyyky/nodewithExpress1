let path=require("path");
// console.log(path);

//! global variables
// console.log();
// __filename;
// __dirname;

// console.log(__filename);
//? C:\Users\vk238\OneDrive\Desktop\Node\Node\Modules\Built-in\path.js => absolute path
// console.log(__dirname);
//? c:\Users\vk238\OneDrive\Desktop\Node\Node\Modules\Built-in  => absolute path

//! 1. basename() it will return the last part of the absolute path
console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log("3 " +path.basename(`E:/NODE?EXPRESS/myFile.txt`));
console.log("4 " +path.basename(`E:/NODE/EXPRESS`));


//! 2. extname() => this will return the extension of the file ,in case of folder it will return ""
console.log(path.extname(__filename));
console.log(path.extname(__dirname));
console.log("3 " +path.extname(`E:/NODE?EXPRESS/myFile.txt`));
console.log("4 " +path.extname(`E:/NODE/EXPRESS`));


// ! 3. parse() => this will parse the string path to object
console.log(path.parse(__filename));
console.log(path.parse(__dirname));
console.log(path.parse(`E:/NODE?EXPRESS/myFile.txt`));

//! 4. format() => this will convery=t the path object in string format
    let pathObject={
        root:"E:/",
        dir: "E:/NODE/EXPRESS",
        base:"myFile.txt",
        ext:".txt",
        name:"myFile",
    };
    console.log(path.format(pathObject));

//! 5. Join() =>   it is used to join the given path
    console.log(path.join("/folder1","/folder2","/myFile.txt"));
    // \folder1\folder2\myFile.txt
    console.log(path.join(__dirname+"/react.js"));


    console.log(path.resolve("/folder1","/folder2","/myFile.txt"));
   // C:\myFile.txt
   
    