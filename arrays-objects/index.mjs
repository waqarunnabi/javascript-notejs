// "create an array" example

const array1 = [1, "Ali", true, 4];

const days =[
    "Snday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
// console.log(days[1]);
// console.log(days[6]);


// // Array Value change
// days[0] = "Sunday";
// console.log(days);

// // Array length
// console.log(days.length);

// // Array last index
// console.log(days[days.length -1]);





// // Array Methods

// const daysOfWeek = [];
// // add an element to the end of an array
// daysOfWeek.push("Sunday");
// daysOfWeek.push("Tuesday");
// daysOfWeek.push("Wednesday");
// console.log(daysOfWeek);

// // add an element from the center of an array
// // splice(index, how many elements to remove, element to add)
// //(1 = index of the element to remove, 0 = how many elements to remove, "Monday" = element to add)
// daysOfWeek.splice(1, 0, "Monday");
// console.log(daysOfWeek);



// // remove an element from the end of an array
// daysOfWeek.pop();
// console.log(daysOfWeek);

// // remove an element from the first of an array
// daysOfWeek.shift();

// // remove an element from the center of an array
// // splice(index, how many elements to remove)
// daysOfWeek.splice(1, 1);
// console.log(daysOfWeek);


// // concadinate two arrays
// const daysOfWeek2 = ["Saturday", "Friday"];
// console.log(daysOfWeek.concat(daysOfWeek2));

// const daysOfWeek3 = daysOfWeek.concat(daysOfWeek2);
// console.log(daysOfWeek3);









// const classdays =[
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
// ];
// // for find value in array
// console.log(classdays);
// let findvalue = classdays.find(e => e === "Monday");
// console.log(findvalue);
// let findvalue2 = classdays.find(day => day === "Sunday");
// console.log(findvalue2);






// // For Sorting in array
// const numArray = [5,2,9,3,6,0,1,4,7,8];
// const sortedArray = numArray.sort();
// console.log(sortedArray);

// const reverseArray = numArray.reverse();
// console.log(reverseArray);








// multi dimensional array
const array11 = [1,2,3,4,5];
const array22 = [6,7,8,9,10];
const array33 = [array11, array22];
console.log(array33);

// [0] = row and [2] = column
console.log(array33[0][2]);
console.log(array33[1][4]);



