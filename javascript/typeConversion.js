// always the inputed value inside the textbox or using command line the inputed value is string.
// sometime we need to convert string into number or other type
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
  
// readline.question('What\'s your age? ', age => {
//     console.log(`your age is ${age}!`);
//     console.log(typeof age)
//     readline.close();
//     console.log(Number(age , typeof age))
//     console.log(Boolean(age, typeof age))
//     console.log(String(age, typeof age))
// });

// n = number is a function
// n = null is a keyword
// s = string is a function
// s = symbol is a function
// b = boolean is a function
// b = bigint  is a function
// u = undefined is a keyword

let number = '473'; 
console.log(typeof number);
console.log(Number(number), typeof (Number(number))); //473 NUMBER OUTPUT

let number2 = "10.3";
console.log(typeof Number(number2)); //10.3  OUTPUT

let number3 = '3920dks';
console.log(Number(number3)); //NaN OUTPUT

let number4 = true;
console.log(Number(number4)); // true = 1 false = 0

let number5 = null;
console.log(Number(number5)); // 0 output

let number6 = undefined;
console.log(Number(number6)); //Nan 

let number7 = Symbol('');
// console.log(Number(number7));//error

let number8 = BigInt('2895');
console.log(Number(number8)); //2895



let string1 = 10;
console.log(`number to string ${string1} is ${String(string1)}`);

let string2 = true;
console.log(`boolean to string ${string2} is ${String(string2)}`);

let string3 = null;
console.log(`null to string ${string3} is ${String(string3)}`);

let string4 = undefined;
console.log(`undefined to string ${string4} is ${String(string4)}`);

let string5 = BigInt('10');
console.log(`BigInt to string ${string5} is ${String(string5)}`);

let string6 = Symbol('a');
// console.log(`Symbol to string ${string6} is ${String(string6)}`); //error


let bool1 = -10;
console.log(`number to boolean ${bool1} is ${Boolean(bool1)}`);

let bol2 = 'aniket';
console.log(`string to boolean ${bol2} is ${Boolean(bol2)}`);

let bol3 = null;
console.log(`null to boolean ${bol3} is ${Boolean(bol3)}`);

let bol4 = undefined;
console.log(`undefined to boolean ${bol4} is ${Boolean(bol4)}`);

let bol5 = BigInt('10');
console.log(`BigInt to boolean ${bol5} is ${Boolean(bol5)}`);

let bol6 = Symbol('a');
// console.log(`Symbol to boolean ${bol6} is ${Boolean(bol6)}`); //error

