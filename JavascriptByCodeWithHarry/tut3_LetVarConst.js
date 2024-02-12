// Before ES6 var keyword was used to declare variable but its bad practice can give you bug
// avoid using var keyword.
// most of the time try to use const keyword.

// ====== DIFFERENCE BETWEEN LET VAR CONST =====
console.log("DIFFERENCE BETWEEN LET VAR AND CONST");

// var is global scope
// let is block scope {}
// const is block scope {}

var name = 'aniket';
var surname = 'panse';
console.log(name); // aniket
{
    var name = 'panse';
    console.log(name); //panse
}
console.log(name); //panse


let address = 'kalyan';
console.log(`global let variable ${address}`);
{
   let address = 'satara';
    console.log(`block let variable ${address}`);
}
console.log(address); 

// Var can be redeclared and updated.
// let cannot be redeclared but updated.
// const cannot be redeclared and updated.


// const age; error const variable must have value;
const age = 22;
console.log(age);
// age = 23; error const variable cannot be updated