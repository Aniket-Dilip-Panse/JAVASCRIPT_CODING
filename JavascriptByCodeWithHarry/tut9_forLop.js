// ========== FOR LOOP IN JAVASCRIPT ============
// TYPES OF FOR LOOP
// 1) FOR LOOP
// 2) FOR OF LOOP :- if we want to loop on value of object.
// 3) FOR IN LOOP :- if we want to loop on key of object.
// 4) while loop
// 5) do while loop

// FOR LOOP
for(let i=0; i<10; i++){
    console.log(i);
}

let mark = {
    aniket: 35,
    sanket: 80,
    sandesh: 90,
    sachin : 95
}

// for in loop
for (let i in mark) {
    console.log(i);
}

// for of loop only for iterable
for (let i of "mark") {
    console.log(i);
}

// infinite loop
for (; ;){
    console.log("namaskar");
}