// practice set 3
// Q1) write a program to print the marks of a student in an object using for loop.

let marks = {
    aniket : 45,
    sachin : 90,
    sandesh : 95,
    sanket : 80
}

for (let i = 0; i<Object.keys(marks).length; i++) {
    console.log(Object.keys(marks)[i], marks[Object.keys(marks)[i]]);
}

// Q2) write a program to print the marks of a student in an object using for in loop.
for (let i in marks) {
    console.log(i, marks[i]);
}

// Q3) write a program to print "try again" until the user enters the correct number?
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const MeanOfNumber = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}

console.log(MeanOfNumber(2, 2, 2, 2));