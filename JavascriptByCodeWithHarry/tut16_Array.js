// =========== Array in javascript ============
// what is array ?
// -> an array is collection of  item.
// -> can be accessible using index. it allocate memmory in continous location.
// -> variable for holding multiple value.

let marks = [45, 56, 74, 52, 56,"aniket",null,undefined];
console.log(marks);
console.log(marks[0]);
console.log(marks.slice(0, 4));
console.log(marks.length);
console.log(marks[9]); //undefinded
marks[9] = "panse";
marks[15] = "kalyan";
console.log(marks);
console.log(typeof marks)
console.log(marks[13]);

for (let i = 0; i < marks.length; i++){
    console.log(marks[i]);
}