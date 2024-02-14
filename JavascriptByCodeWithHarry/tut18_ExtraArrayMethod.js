// Array Method
let name = ["anilet", "sanket", "sandesh", "sachin"];
delete name[0];
console.log(name); // length of array doesn't change
// output [<1 empty item>, 'sanket', 'sandesh', 'sachin']


let value = [23.4, 44, 4, 53, 424];
console.log(name.concat(value, name));

// sort method
console.log(name.concat(value, name).sort());
for (let i = 0; i < name.length; i++){
    console.log(name[i]); 
}

const compare = (a,b)=>{
    return a - b;
}
console.log(value.sort(compare));


// splice and slice

// arr.splice("position to add element", "no. of element to delete", "element to add")

let nums = [34, 5, 6, 7, 8, 9, 10];
console.log(nums.splice(2, 3, "aniket", "sanket", "sandesh"));
console.log(nums.slice(2, 3));








