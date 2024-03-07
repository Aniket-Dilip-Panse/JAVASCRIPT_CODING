// "use strict";
// this work differently in different scenario

// if this inside function work differently
// if this inside global work differently
// if it is inside arrow function it work different
// if it is inside nested function it work differntly.


// IN global state
// THIS inside global state is different for browser and nodejs environment.
// FOR BROWSER THIS === WINDOW OBJECT
// FOR NODEJS THIS === {}

console.log(this) //empty object will be output.



//IN FUNCTION STATE
// ANS:- IN FUNCTION STATE THIS VALUE DEPEND UPON THE STRICT MODE
// IN STRICT MODE THIS === UNDEFINED
// IN UNSTRICT MODE THIS === WINDOW OBJECT.
function add(a, b) {
    return this
}
console.log(add(2, 3)); // global object


for (let i in [0, 1, 3]) {
    console.log(i);
}

// uncomment use strict mode line no. 1
// function sub(a, b) {
//     return this
// }
// console.log(sub(2, 3)); //output :- undefined
