// !1st way of importing
// let value = require("./app");
// console.log(value);

// value.greet();
// console.log(value.arr);
// value.printName();

// value();


// !2nd way of iporting

// let {greet,arr,str,printName} = require("./app");

// greet();
// console.log(arr);
// console.log(str);
// // console.log(object);
// printName();


// let value = require("./app");
// // console.log(value)

// console.log(value.object);
// console.log(value.greet());

let {greet , myName,object} = require("./app");
console.log(greet());
console.log(object);
console.log(myName);