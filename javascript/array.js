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

let arr = [1, 23, 4, 5, 6, 7, 8, 9, 0, 43, 2, 1, 2536, 3633];
console.log(arr.splice(2, 2)); //2 = position 2 = deleted value after position
console.log(arr)


// In javascript array be resized.
// shallow copy :- work as a refrence
// deep copy :- create new copy of an array

const newArr = [121, 43, 56, 67, 43, 574, 43, 45, 47, 432, 65];
newArr.push(348); // add element at the end of array
newArr.pop(); //remove end element from array
newArr.unshift(45); //add element at the beginning of array but clause is it change the index of all element
newArr.shift();//remove first element of array.

console.log(newArr.includes(9));
console.log(newArr.indexOf(45));

// slice or splice
console.log("A ", newArr);

function sorting(a,b) {
    return a - b
}
console.log(newArr.sort(sorting));

// spread operator ...suppose we have glass and if we drop it then it will break into piece hence ... spread work same.

const name = ['sachin', 'sandesh', 'sanket', 'aniket'];
const age = [34, 27, 24, 23];
const address = ['pune', 'mumbai', 'wai', 'homeless'];
console.log(name.concat(age, address));

const info = [...name, ...age, ...address];
console.log(info);

newArr.push(name, age, address);
console.log(newArr);

console.log(newArr);
console.log(newArr.flat(Infinity));

console.log(Array.from('aniketpanse'));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


// all important things in array
const myArr = [];

const newArr = [...myArr, ...newArr];