// let a = "Bilal";
// if (a === "Bilal") {
// 	alert("Bilal is fun");
// }
// 48 +  9 + 8;
// console.log(48 +  9 + 8);

// let variable = 10000000000000;
// let variable2 = 10000000000000;
// let variable3 = 3.5;
// console.log(variable);
// if (variable === variable) {
// 	alert("Value = " + (variable + variable2) + " typeof - a - " + typeof(variable) + 
//   " b - " + typeof(variable2) + 
//   " c - " + typeof(variable3));
// }

let a = 10;
//let a = 30; //error

a = 20;

var b = 20;
var b = 21;  //no error for redeclaring in var

const PI = 3.14;
//PI = 2;
console.log(PI);  // error - Uncaught TypeError: Assignment to constant variable

variableWithoutLetOrVar = "Bilal";
console.log(variableWithoutLetOrVar); //outputs Bilal