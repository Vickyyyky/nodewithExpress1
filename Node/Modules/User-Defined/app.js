// function greet(){
//     console.log("Heelo");
// }

// let arr = ["String",false,123];

// let object = {
//     name:"abc",
//     age:22
// };

// let str = "Nitish Shah";

// function printName(){
//     console.log("name");
// }

//1st way of exporting

// module.exports= greet;
// module.exports = arr;
// module.exports = object;

//using this format ==> this will consider the last export statement

// module.exports = {
//     greet,
//     arr,
//     object,
//     str,
//     printName
// }



//exporting ==> wrapping
//importing ==> unwrapping



// !2nd way of importing

exports.greet =() => {
    console.log("hello");
    return "end";
};

exports.myName = "Something";

exports.object = {key :"value"}

