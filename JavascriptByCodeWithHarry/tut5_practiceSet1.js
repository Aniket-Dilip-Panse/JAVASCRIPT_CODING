// =============PRATICE SET ==================
let number = '45';
console.log(number);
console.log(45 + number);

console.log(typeof number);

// Q3) create a const object in javascript can you change it to number later answer:- NO
const arr = {
    'name': 'aniket',
    'age': 22,
    'address': 'kalyan',
    'salary':0
}
console.log(arr);
console.log(typeof arr);

// arr = 2; error will occur
// console.log(arr);

arr['surname'] = 'panse';
console.log(arr.surname);

const dict = {
    apple: 'a fruit',
    ball: 'a playing object',
    cat : 'a living animal'
}
console.log(dict);