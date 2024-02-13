//  practice set
// Q1)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('enter number: ', number => {
    (number >= 10 && number <= 20) ? console.log('true') : console.log('false');  
    if (number % 2 == 0 || number % 3 == 0) {
        console.log("number is divisible by 2 or 3");
    } else {
        console.log("number is not divisible by 2 or 3");
    }
    readline.close();
})
