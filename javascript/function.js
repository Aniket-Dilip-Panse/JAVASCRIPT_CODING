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


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage('aniket'));
console.log(loginUserMessage()); //undefined just logged in

// shopping cart we dont know how many argument user is going to add 
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(2020, 340, 45, 453, 20, 10))


function showCart(value1, value2, ...values) {
    return `${value1} , ${value2} , ${values}`
}

console.log(showCart()); //undefined , undefined ,

const user = {
    username: 'aniket',
    age : 23
}

// adding object in function
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.age}`)
}


// adding array in function
const newarry = [200, 3002, 3002, 40002, 3, 329];
function arrayVlaue(arr) {
    return arr;
}
console.log(arrayVlaue(newarry));