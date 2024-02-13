// FUNCTION:- function is a block of code which some specific input and return an output.
// code resuability and readability.
let a = 1;
let b = 2;
let c = 3;
function Avg(x, y) {
    return (x + y) / 2;
}
console.log("Average of a,b is ", Avg(a,b));
console.log("Average of a,c is ", (a + c) / 2);

const Avg2 = (i,j) => {
    return i + j;
}
console.log("Average of b,c is ", Avg2(b, c));

const sum = () => {
    console.log("sum variable stored.");
    return 0
}
console.log(sum());


const addition = () => {
    return "addition function";
}
let value = addition();
console.log(value);