// learning loops in javascript
// for loop
// mutliplication table
let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

const fruits = ["apple", "banana", "chikoo", "dragon"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i]} is in index ${i}`);
}

const number_array = [];
for (let j=0; j<=10; j+=2){
    number_array.push(j);
}
console.log(number_array);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i of arr) {
    console.log(arr[i]);
}