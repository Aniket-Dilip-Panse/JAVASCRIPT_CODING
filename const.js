// const = A variable that can't be changed
// if number or boolean is const use capital words
// else use small words 
const PI = 3.14

const readline = require('readline').createInterface({
    input: stdin,
    output: stdout
});

let areaCircle = readline.question('enter the radius of circle', radius => {
    console.log(PI * radius * radius);
});