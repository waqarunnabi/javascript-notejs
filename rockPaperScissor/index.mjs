// The variable choices
let choices = ["rock", "paper", "scissors"];

// There will be the message that are show to the user
let userPrompt = "0 for rock, 1 for paper, 2 for scissors: ";
let outcome = "ready to play";


// Computer choices randomly
// npm install random-int
import randomInteger from "random-int";
let computerChoice = randomInteger(0, 2);
computerChoice = choices[computerChoice];

// Prompt the user for input
import PromptSync from "prompt-sync";
const prompt1 = PromptSync();
let userChoice = prompt1(userPrompt);
userChoice = choices[userChoice];


// Compare the choices
if (computerChoice === userChoice) {
    outcome = "It's a tie!";
    // Draw
}
    else if (computerChoice === "rock" && userChoice === "paper") {
        outcome = "You win!";
    }
     else if (computerChoice === "rock" && userChoice === "scissors") {
    outcome = "Computer wins!";
    // Rock beats scissors
}
    else if (computerChoice === "paper" && userChoice === "rock") {
    outcome = "Computer wins!";
    // Paper beats rock
}
    else if (computerChoice === "paper" && userChoice === "scissors") {
    outcome = "You win!";
    // Scissors beats paper
}
    else if (computerChoice === "scissors" && userChoice === "rock") {
    outcome = "You win!";
    // Rock beats scissors
}
    else if (computerChoice === "scissors" && userChoice === "paper") {
    outcome = "Computer wins!";
    // Scissors beats paper
}
    else {
        outcome = "Something went wrong";
    }

// Display the outcome
console.log("Computer choose: " + computerChoice);
console.log("You choose: " + userChoice);
console.log(outcome);







