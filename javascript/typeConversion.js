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

// n = number 
// n = null
// s = string
// s = symbol
// b = boolean
// b = bigint
// u = undefined

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