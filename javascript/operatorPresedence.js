/*
  Operator precedence
  1. Parenthesis()
  2. exponents
  3. multiplication & division & modulo
  4. addition and subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2; //exponents then multiplication then addition
let result2 = 12 % 5 + 8 / 2 // left to right presedence first modulo then division then addition
let result3 = 6 / 2 ** (2 + 5);

console.log(result); 
console.log(result2); 
console.log(result3); 