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