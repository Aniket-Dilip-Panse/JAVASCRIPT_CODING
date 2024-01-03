//simple javascript program 
console.log("namaskar");

//variable in javascript
// let var and const
//var is global scope
//let is block scope
//const is block scope

// var variable can be redifined as well as updated
//let variable cannot be redifined but can updated
//const variable can be redifined but not updated

var name = "aniket";
// console.log(name);

name = "kumar";
console.log(name);

let last_name = "pan";
last_name = 'panse';
console.log(last_name);

const pi = 3.14;
console.log(pi);

// object in javascript
const person = {
    name: "aniket",
    age: 24
}
console.log(person);

// array in javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// operator
// +, -, *, /, %
let number = 10;
number = number + 5;
console.log(number);

let number1 = 10;
number1 = number1 - 5;
console.log(number1);

let number2 = 10;
number2 = number2 * 5;
console.log(number2);

let number3 = 10;
number3 = number3 / 3;
console.log(number3);

let number4 = 10;
number4 = number4 % 5;
console.log(number4);

// user input in javascript

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('What\'s your name? ', name => {
    console.log(`Hello ${name}!`);
    // readline.close();
  });
  let addition = (a, b) => {
    return a + b;
}
console.log(addition(10, 20));

  readline.question("enter the value of first number: ", num1 => {
    readline.question("enter the value of second number: ", num2 => {
        console.log(addition(num1, num2));
        readline.close();
    })
})
