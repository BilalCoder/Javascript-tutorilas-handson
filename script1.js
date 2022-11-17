// Function vs function expressions

function add(number1, number2) {
  return number1 + number2;
}
console.log(add(4, 4));

let subtraction = function (number1, number2) {
  return number1 - number2;
}
console.log(subtraction(23, 13));

//Arrow functions
let multiplication = (number1, number2) => number1 * number2;
console.log(multiplication(2, 8));

let printWelcome = userName => {
  console.log(`Welcome ${userName}`);
}
console.log(printWelcome("Bilal"));
