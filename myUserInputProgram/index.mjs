// import package
import PromptSync from "prompt-sync";
// create a prompt object
// create variable to hold the package
const prompt = PromptSync();

// prompt the user for input
var userInput = prompt("Enter your name: ");

// print the user input
console.log("Hello " + userInput);



var age = prompt("What is your Age: ");
console.log("You are " + age + " years old");