// =============== practice set 4 ================
// Q1) what will the following print in javascript? console.log("ani/"".length);
console.log("ani\"".length); //4

// Q2) explore the include startswith and endwith function in a string.
let place = 'satara';
console.log(place.includes('s'));
console.log(place.startsWith('a'));
console.log(place.endsWith('t'));

// Q3)
console.log(place.toLowerCase());

// Q4) 
let str2 = "please give Rs 1000";
let amount = Number.parseInt(str2.slice("please give Rs ".length))
console.log(amount , typeof(amount));