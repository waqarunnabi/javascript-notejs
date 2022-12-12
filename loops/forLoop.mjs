// For Loop

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }




// let cleanestCities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// for (let i = 0; i < 4; i++){
//     console.log(cleanestCities[i]);
// }



// // practice excercise 5.3

// const myWork = [];

// for (let i = 0; i < 10; i++) {
//    let status = i % 2 ? true : false;

//    let temp = {
//          name: `Lesson ${i}`,
//          status: status,
//    }
//    myWork.push(temp);
// }

// console.log(myWork);






// let cleanestCities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// for (let i = 0; i < cleanestCities.length; i++)
// {
//     if ("Islamabad" === cleanestCities[i]) {
//         console.log("Islamabad is the cleanest city");
//         break;
//     }
// }




// let firstNames = ['Syed','Asad', 'Ali', 'Ahmed'];
// let lastNames = ['Waqar','Khan', 'Raza', 'ALi'];
// let fullNames = [];

// for (let i = 0; i < firstNames.length; i++) {

//     fullNames.push(firstNames[i] + ' ' + lastNames[i]);
// }
// console.log(fullNames);





// // Table of 2
// const tableOf = 2;
// for (let i = 1; i <= 10; i++) {
//     console.log(tableOf +" * "+ `${i} = ${2 * i}`);
// }




// // Table of input
import PromptSync from "prompt-sync";
const prompt = PromptSync();
// const tableOf = prompt
// ("Enter the numberof which you want to print the table: ");


// for (let i = 1; i <= 10; i++) {
//     console.log(tableOf +" * "+ `${i} = ${tableOf * i}`);
// }




// const max = 10;

// const randomNumber = Math.floor(Math.random() * max) + 1;


// let userInput = prompt("Guess a number between 1 and 10: You Have 3 Chances: ");
// for (let i = 1; i <3; i++) {
//     let chance = 3 - i;
//     // console.log(randomNumber);
//     userInput = prompt(`Please guess again, You Have ${chance} more Chances: `);
// }
//     if (userInput != randomNumber) {
//     console.log("You have lost the game");
// }   else {
//     console.log("You guessed it! The number was " + randomNumber);
// }







// // Nested For Loop

// const products = ["Shirt", "Pant", "Shoes", "Socks", "T-Shirt"];
// const gifts = ["Pen", "keychain", "Notebook", "Sticker", "Mug"];

// for (let i = 0; i < products.length; i++){
//     // console.log(products[i]);
//     for (let j = 0; j < gifts.length; j++){

//         console.log(products[i] + " _ " + gifts[j]);
//     }
// }


// // Practice Exercise 5.5




let car = {
    make: "Land Rover",
    model: "Defender",
    year: 2023,
    color: "Black",
}

// For In Loop
// boject is car

for (const key in car) {
    // console.log(key);
    console.log(car[key]);
    
}

// // Practice Exercise 5.7

















// for (let i = 0; i < 5; i--) {
//     console.log("");
//     // for (let j = 0; j < 3; j++) {
//     //     console.log("#");
//     // }
// }

