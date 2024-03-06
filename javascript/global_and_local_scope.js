let a = 10;
const b = 20;
var c = 30;

// {} this is call scope
// IN JAVASCRIPT SUPPOSE WE HAVE GRAND PARENT , PARENT AND CHILD FUNCTION 
function name() {
    // nav variable is global to all function inside name() function 
    var nav = 'aniket';
    console.log(` I am inside name() function and my nav is ${nav}`);

    // age function can access property of name() function but name() cannot access the property of age()
    function age() {
        let vai = 23;
        console.log(` I am inside name() function and my nav is ${nav}`);
        console.log(` I am inside age() function and my vai is ${vai}`);
        function birthday(){
            const DOB = '2/3/2001';
            console.log(` I am inside age() function and my vai is ${vai}`);
            console.log(` I am inside birthday() function and my DOB is ${DOB}`);
            function caste() {
                var dharm = 'HINDU MARATHA';
                console.log(` I am inside name() function and my nav is ${nav}`);
                console.log(` I am inside age() function and my vai is ${vai}`);
                console.log(` I am inside birthday() function and my DOB is ${DOB}`);
                console.log(`I am inside caste function and my caste is ${dharm}`);
            }
            caste();
        }
        birthday();
        // console.log(dharm);
    }
    function gender() {
        let gen = 'Male';
        console.log(` I am inside name() function and my nav is ${nav}`);
        console.log(` I am inside gen() function and my gender is ${gen}`);
    }
    age();
    gender();
}
name();
// console.log(dharm); if variable is inside function but declare with var keyword is not global for whole file gobal to that function.
// console.log(name());
// console.log(a);
// console.log(b);
// console.log(c);

// variable declare inside function using var keyword is still block variable because the function body is stop and variable is collected by garbage collector.rest all other {} the var keyword is global

function one() {
    const username = 'aniket';

    function two() {
        const website = 'youtube';
        console.log(username);
    }
    // console.log(website);  //error because website scope is limited.
    two();
}
one();


if (true) {
    const username = 'andya';
    if (username === 'andya') {
        const age = 23;
        console.log(`${username} ${age}`);
    }
    // console.log(age); // age scope is {limited}
}
// console.log(username); //error username scope is {limited}.


// ++++++++++++++++++++++++INTRESTING++++++++++++++++++++++
function addone(num){
    return num + 1; 
}
const result = addone(5);
console.log(result)



noerror();
function noerror() {
    console.log('no error if we call function above initialize');
}


// error() //hoisting concept
const error = function () {
    console.log("this will give error if we call function above initialize");
}