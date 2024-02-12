// condition expression
// 1) if
// 2) else if
// 3) else

let number = 17;
if (number >= 18) {
    console.log('you are ready for applying driving license.');
} else {
    console.log('you are not ready for applying driving license.');
}

// let userInput = prompt('enter the number: ');
// userInput = Number.parseInt(userInput);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('What\'s your age? ', age => {
    if (age >= 18) {
        console.log('ready for voting');
        readline.close()
    } else {
        console.log('cannot vote');
        readline.close();
    }
});

const readline2 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline2.question("what is your name: ", name => {
    console.log(name);
    readline2.close();
});

// switch case 
let expr = 'mango';
switch (expr) {
    case 'banana':
        console.log('you choose banana');
        break;
    case 'mango':
        console.log('you choose mango');
        break;
}

// ternary operator
// condition ? expression 1 : expression 2
number >= 18 ? console.log('ready for voting') : console.log(' not ready for voting');