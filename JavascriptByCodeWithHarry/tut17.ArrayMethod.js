// ARRAY METHOD==============
let marks = [43, 53, 44, 5, 46, 64, 64, 3];
console.log(marks.toString().length); //convert all element to string

let marks_joined = marks.join("_");
console.log(marks_joined); //43_53_44_5_46_64_64_3

let markspop = marks.pop(); // remove last element
console.log(markspop); // return the pop element

let markspush = marks.push("namaskar") // add element at the end of array. like append method
// it returns the length of array
console.log(markspush);

let markshift = marks.shift(); //removes first element of array. It modify the original array.
console.log(markshift); //return the element

let marksunshift = marks.unshift("45"); //add element at the beginning of array.
console.log(marksunshift); // return the length of element