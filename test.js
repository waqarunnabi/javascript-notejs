const max = 10;

const randomNumber = Math.floor(Math.random() * max) + 1;
console.log(randomNumber);

let userInput = prompt("Guess a number between 1 and 10: You Have 3 Chances: ");
for (let i = 1; i <3; i++) {
    let chance = 3 - i;
    userInput = prompt(`Please guess again, You Have ${chance} more Chances: `);
}
if (userInput != randomNumber) {
    console.log("You have lost the game");
} else {
    console.log("You guessed it! The number was " + randomNumber);
}