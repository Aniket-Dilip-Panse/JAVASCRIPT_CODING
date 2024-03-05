// oject is same as dictionary in python
const person = {
    name: 'aniket panse',
    age: 22,
    location: 'GOA',
    education:'MCA'
}

console.log(person.name);
console.log(person.location);
console.log(person.education);

person['phone'] = '+91-8294843938';
console.log(person.phone);

console.log(person);

const introduction = (name, phone) => `person name is ${name} and his phone number is ${phone} `
console.log(introduction(person.name, person.phone))

const carObject = () => {
    const car = {
        name: ['BMW','Mercesdes','Audi','Ferari','Lamborghini'],
        color: 'white',
        model: 'new-model',
        amount:10000000000,
        price: function () {
                this.price = 500000000
                return this.price;
            }
    }
    console.log(car.price());
    return car;
    }
console.log(carObject());

// declaring symbol
const mysym = Symbol('key1');


// creating object 
const jsuser = {
    name: 'aniket',
    "full name" : 'aniket dilip panse',
    age: 22,
    location: 'mumbai',
    email: 'aniket12@gmail.com',
    isloggedin: false,
    lastlogindays: ['monday', 'saturday'],
    [mysym] : "mykey1" //creating symbol as key
}

// accessing object element
console.log(jsuser.name);
console.log(jsuser['email']);
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);

jsuser["full name"] = 'Aniket Dilip Panse';
console.log(jsuser);

// if we don't wont to make any changes in our object we can freeze the object
// Object.freeze(jsuser);

jsuser.greeting = function () {
    return (`namaskar ${this.name} your age is ${this.age}`);
}
console.log(jsuser['greeting']());


// object declare using constructor or singleton
const tinderuser = new Object()

tinderuser.id = "aniket12"
tinderuser.name = "andya"
tinderuser.isloggedin = true

console.log(tinderuser)


// object inside object
const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: 'aniket',
            lastname : 'panse'
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname);

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 4: 'd' };
const obj3 = { 5: 'e', 6: 'f' };
const obj4 = Object.assign(obj1, obj2);
const obj5 = Object.assign({}, obj1, obj2, obj3);
console.log(obj1); //Object.assign(obj1, obj2) due to this object2 element has appended into object1 so object1 has both object1 and object2 element. 
console.log(obj2); //{ 3: 'c', 4: 'd' };
console.log(obj3); //{ 5: 'e', 6: 'f' };
console.log(obj4); //Object.assign({}, obj1, obj2, obj3); due to this new object is created.

// most used method ...spread
const allobj = { ...obj1, ...obj2, ...obj3 };

console.log(Object.keys(allobj));
console.log(Object.values(allobj));
console.log(Object.entries(allobj));
console.log(tinderuser.hasOwnProperty('isloggedin'));

// destructing of object
const course = {
    coursename: 'js in hindi',
    price: '999',
    courseinstructor : 'hitesh'
}

// console.log(course.courseinstructor)
// instead of always writing course.courseinstructor we can use below code
const { courseinstructor } = course
// or
const { courseinstructor: instructor } = course


// API  value is in the form of json
