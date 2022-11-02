import randomInteger from "random-int";
import PromptSync from "prompt-sync";

const options = ["rock", "paper", "scissor"];
let userPrompt = "0 for rock, 1 for paper, 2 for scissors: ";
let result = "ready to play";

let computerChoice = randomInteger(0, 2);
computerChoice = options[computerChoice];


const prompt = PromptSync();
let userChoice = prompt(userPrompt);
userChoice = options[userChoice];


if (computerChoice === userChoice) {
    result = "It's a tie!";
}
    else if (computerChoice === "rock" && userChoice === "paper") {
        result = "You win!";
    }
    else if (computerChoice === "rock" && userChoice === "scissor") {
        result = "Computer wins!";
    }
    else if (computerChoice === "paper" && userChoice === "rock") {
        result = "Computer wins!";
    } 
    else if (computerChoice === "paper" && userChoice === "scissor") {
        result = "You win!";
    }
    else if (computerChoice === "scissor" && userChoice === "rock") {
        result = "You win!";
    }
    else if (computerChoice === "scissor" && userChoice === "paper") {
        result = "Computer wins!";
    }
    else {
        result = "Please enter a valid option";
        }




console.log("Computer choose: " + computerChoice);
console.log("You chose: " + userChoice);
console.log(result)



