// function in javascript is a block of code which take some inputs and return some specific output.
function sum(a,b,name) {
    console.log('namaskar ' + name);
    return a+b;
}
console.log(sum(2, 4, 'aniket'));

const addition = (firstname,lastname) => {
    console.log(firstname);
    console.log(`myself ${firstname} ${lastname} new javascript programmer`);
}
console.log(addition("aniket","panse"))

const divide = (a, b) => a / b;
console.log(divide(10, 0));

// arrow function with explicit return
const sumArrow = (number, number2) => {
    return number+number2;
}
console.log(sumArrow(10,20));

const mulArrow2 = (digit, digit2) => digit * digit2
console.log(mulArrow2(10,20));
