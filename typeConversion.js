// always the inputed value inside the textbox or using command line the inputed value is string.
// sometime we need to convert string into number or other type
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('What\'s your age? ', age => {
    console.log(`your age is ${age}!`);
    console.log(typeof age)
    readline.close();
    console.log(Number(age , typeof age))
    console.log(Boolean(age, typeof age))
    console.log(String(age, typeof age))
});
  
