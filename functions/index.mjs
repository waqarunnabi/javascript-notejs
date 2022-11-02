// // Function declarations


// function add(a, b) {
//   console.log(a + b); // a + b
// }

// add(3, 2);


// // Function expressions
// let add2 = function(a, b) {
//   console.log(a + b); // a + b
// }
// add2(3, 2);






// // Immediately invoked function expressions
// (function() {
//   console.log("Immediately invoked function expressions");
// })();





// // Importing functions and use them
// // Path: Functions\index.mjs
// import { add } from './add.mjs';

// add(3, 2);



// // Default parameters
// function add3(a, b = 2) {
//   console.log(a + b);
// }

// add3(3);


// // Default or unsuitable parameters
// function add2(a= 1 , b = 2) {
//   console.log(a + b);
// }

// add2(3, 2);




// Arrow functions
// let multi = (a, b) => {
//   console.log(a * b);
// }

// multi(3, 2);




// // Arrow functions with one parameter
// let fun1 = a => {
//   console.log(a * 2);
// }

// fun1(3);

// // Arrow functions with one parameter and one line
// let fun2 = a => console.log(a * 2);

// fun2(3);

// // Arrow functions with no parameters
// let fun3 = () => console.log("Arrow functions with no parameters");

// fun3();

// // Arrow functions with no parameters and one line
// let fun4 = () => "Arrow functions with no parameters and one line";

// console.log(fun4());

// // Arrow functions with no parameters and one line
// let fun5 = () => ({name: "Arrow functions with no parameters and one line"});
// console.log(fun5());


// As a final example, we can combine the arrow function with certain built-in methods. 
// For example, we can use the foreach() method on an array. This method executes a 
// certain function for every element in the array. Have a look at this example:


// let arr = [1, 2, 3, 4, 5,6,7,8,9,10];
// // arr.forEach(a => console.log(a * 2));

// // arr.forEach((a, index) => console.log(index + ": " + a * 2));

// arr.forEach((a, index) => console.log("2 * " + a + " = " + a * 2));
























