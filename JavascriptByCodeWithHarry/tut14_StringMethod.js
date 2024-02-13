// ========== String Method ============
let name = 'aniket';
let email = "aniketpanse12@gmail.com";
let address = `E-2 Mahi lokgram co.hsg society`

console.log(name.length);

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

console.log(name.toUpperCase());
console.log(name.toLowerCase());

// index of string start from 0 
console.log(address.slice(2, -2));
console.log(address.slice(2,));

// replace
console.log(name.replace('aniket', "andya")); //andya
console.log(name); //aniket

// concat 
console.log(name.concat(' is a member of ', address)); 


// trim 
let space = '     space        ';
console.log(space.trim());

