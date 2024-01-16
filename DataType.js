// There are total 7 types of datatype in javascript
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt
// nn ss bb u

// number
let number = 10;
let number2 = 10.6;
console.log(number);
console.log(typeof number2);

// string
let name = "aniket";
console.log(name);  

// boolean
let isTrue = true;
console.log(isTrue);

// undefined
let undef = undefined;
console.log(undef);

// null
let nul = null;
console.log(nul);

// symbol
let sym = Symbol();
console.log(sym);

// bigint
let big = 100n;
console.log(big);

// object
let obj = {
    name: "aniket",
    age: 24
}
console.log(obj);

// array
let arr = [1, 2, 3, 4, 5];
console.log(arr);

let wether = false;
if (wether){
    console.log("Grab your umbrella");
}else {
    console.log("wear your sunglasses");
}

console.log(Math.floor(Math.random()))