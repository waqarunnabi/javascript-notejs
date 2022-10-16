// Logical Operators

// let isInPakistan = false;
// if (isInPakistan) {
//   console.log("I am In Pakistani");
// } else {
//   console.log("I am not in Pakistani");
// }







// let percentage = 75;
// if (percentage >= 90) {
//     console.log("A+");
//     }
//     else if (percentage >= 80) {
//         console.log("A");
//     }
//     else if (percentage >= 70) {
//         console.log("B");
//     }
//     else if (percentage >= 60) {
//         console.log("C");
//     }
//     else if (percentage >= 50) {
//         console.log("D");
//     }
//     else {
//         console.log("F");
//     }










// for propmt
// write in terminator
// npm install prompt-sync

// import package write in code
// import PromptSync from "prompt-sync";


// // create a prompt object
// // create variable to hold the package
// const variabletoHoldPackage = PromptSync();
// const variablename = variabletoHoldPackage ("Prompt Message: ");


import PromptSync from "prompt-sync";
const prompt = PromptSync();






// // prompt the user for input
// var percentage = prompt("Enter your Percentage: ");


// if (percentage >= 90) {
//     console.log("A+");
//     }
//     else if (percentage >= 80) {
//         console.log("A");
//     }
//     else if (percentage >= 70) {
//         console.log("B");
//     }
//     else if (percentage >= 60) {
//         console.log("C");
//     }
//     else if (percentage >= 50) {
//         console.log("D");
//     }
//     else {
//         console.log("F");
//     }







// const number = prompt("Enter a number: ");

// // ternary operator
// const result = number >= 50 ? "Pass" : "Fail";
// console.log(result);



// // // ternary operator
// let isInPakistan = prompt("Are you in Pakistan? (true/false): ");
// const greeting = isInPakistan ==="true" ? "Hello Imran" : "Hello Alexander";
// console.log(greeting);


let location = prompt("What is your location: ");
switch (location) {
    case "America":
        console.log("Hello Alexander");
        break;
    case "Pakistan":
        console.log("Hello Imran");
        break;
    case "Germany":
        console.log("Hello Peter");
        break;
    default:
        console.log("Hello Stranger");
        break;
}

