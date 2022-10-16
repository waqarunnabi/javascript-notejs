// objects
// like list in Python

const object1 = {
    rollNumber: "PIAIC12345",
    firstName: "Muhammad",
    lastName: "Ali",
    age: 25,
    // array in object
    courses: ["AI", "Blockchain"],
    // object in object
    address: {
        city: "Karachi",
        country: "Pakistan"

    }


}

console.log(object1.rollNumber);
// change value of object
object1.rollNumber = "PIAIC54321";
console.log(object1);

