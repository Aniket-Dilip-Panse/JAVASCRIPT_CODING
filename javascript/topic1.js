// Basic of Javascript
// 1)variable
// ---let
// ---var
// ---const
// 2)HOISTING OF VARIABLE AND FUNCTION.

// let , var , const
// let and const are block scope
// var is global scope

// var variable can be redifined as well as updated
// let variable cannot be redifined but can updated
// const variable can be redifined but not updated

let name = "aniket";
console.log(name);

let value = 2;
console.log(value);

let isPositive = true;
console.log(isPositive)


var name2 = "andya";
console.log(name2);

var value2 = 2;
console.log(value2);

var isPositive2 = true;
console.log(isPositive2);

const name3 = 'panse';
console.log(name3);

const value3 = 45;
console.log(value3);

const isPositive3 = false;
console.log(isPositive3)


// let var and const as well as function can also be hoisted
console.log(name4);
var name4 = 'shet';
console.log(greet());

function greet() {
    return "namaskar";
}

var arr = () => {
    console.log("namaskar");
}

console.log(obj);
var obj = {
    name: 'aniket',
    age: 21
}
console.log(obj);


// ============================= new concept ===============================
// var keyword HOISTING

console.log(greeting); // undefined
var greeting = 'namaskar';

console.log(greeting); // namaskar


// function hoisting we will get the output but in variable hoisting answer will be undefined.
console.log(addition(1, 2)); // 3
function addition(a, b) {
    return a + b;
}