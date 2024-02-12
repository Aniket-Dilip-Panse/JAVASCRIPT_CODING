// array is linear datastructure which store elements at continous memory location. which can access by using index. array contain same datatype element

const fruits = ['apple', 'banana', 'chikoo', 'dragon', 'emli'];
console.log(fruits[1]);
// length of arrays
console.log(fruits.length);

console.log(fruits.push('gauva'));

console.log(fruits);

// slicing in javascipt has slice method
console.log(fruits.slice(0, -1));

// array important method push slice indexof length

console.log(fruits.indexOf('banana'));

let i = 0
for (i; i < fruits.length; i++){
    console.log(fruits[i]);
}