// practice question based on array=========
// Q1) create an array of numbers and take input from the user to add numbers to the array.
var readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = [];

var size = readline.question("enter the size of array: ", size => {  
    console.log(size);
    readline.close();
})

var readline2 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let data = readline2.question("enter the value: ", value => {
    for (let i = 0; i < size; i++) {
        arr.push(value);
    }
});
