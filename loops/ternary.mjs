// This is why our ternary operator has its name;
// it has three operands. Here is its template:


// condition ? exprIfTrue : exprIfFalse

// The condition is evaluated first. If it evaluates to true,
// the operator returns the value of exprIfTrue.
// If the condition evaluates to false,
// the operator returns the value of exprIfFalse.

// The ternary operator is often used as a shortcut
// for the if...else statement.
// For example, the following two code snippets are equivalent:

// let status = (age >= 18) ? 'adult' : 'minor';

let access = age < 18 ? "denied" : "allowed";
age < 18 ? console.log("denied") : console.log("allowed");