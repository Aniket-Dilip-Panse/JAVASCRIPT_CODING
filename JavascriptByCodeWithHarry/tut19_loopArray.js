// ======== using loop in array ==========
let marks = [45, 56, 74, 52, 56, "aniket", null, undefined];
for(let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

// ForEach loop syntax
// array.forEach(element => {
    // statements
// });

// Array From :- This is used to convert html collection to an array.
let name = 'aniket';
let arr = Array.from(name);
console.log(arr); //['a', 'n', 'i', 'k', 'e', 't']

let value = 939934535636;
let arr2 = Array.from(value);
console.log(arr2); // []

// for ... of loop is used to access array item

for (let i of marks) {
    console.log(i);
}

// for ... in loop is used to access array index
for (let i in marks) {
    console.log(i);
}