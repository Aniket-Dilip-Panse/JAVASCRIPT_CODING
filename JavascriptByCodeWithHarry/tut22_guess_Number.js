// NUMBER GUESSING GAME
const random = Math.floor(Math.random() * 100) + 1;

var userNumber = prompt("Guess a number between 1 and 100 ");
userNumber = Number.parseInt(userNumber);

do {
    if (userNumber < random) {
        userNumber = prompt("Too low! Guess again ");
        userNumber = Number.parseInt(userNumber);
    } else if (userNumber > random) {
        userNumber = prompt("Too high! Guess again ");
        userNumber = Number.parseInt(userNumber);
    }
} while (userNumber != random);
console.log("You guessed it! The number was " + random)