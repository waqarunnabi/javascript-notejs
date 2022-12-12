// Callback function






// const func = (callback) => {
//     console.log("Function 1 invoked");
//     callback();

//     }


// const func2 = () => {
//     console.log("Function 2 invoked");
//     }

// func(func2);




// // Second Method

// const func = (callback) => {
//     console.log("Function 1 invoked");
//     callback();

//     }

// func(() => console.log("Function 2 invoked"));









// // SetTimeout function
// console.log("First");
// setTimeout(() => console.log("Second"), 2000);
// console.log("Third");

// // first and third will be printed first and then second after 2 seconds
// // javascript is single threaded language
// // setTimeout is a web api
// // with the help of web api we can do some async tasks
// // with setTimeout we create a fake timer





// // login function with callback


// const loginUser = (email, password) => {
//         console.log("Logged in");
//         return { userEmail: email };
// }

// const loggedIn = loginUser("syedwaqarunnabi@gmail.com" , "12345");
// console.log(loggedIn);










// const loginUser = (email, password, callback) => {
//     setTimeout(() => {
//         // console.log("Logged in");
//         callback();
//     }, 2000);
// }

// const loggedIn = loginUser("syedwaqarunnabi@gmail.com" , 12345 , () => console.log("User Logged In"));
// console.log(loggedIn);









// const loginUser = (email, password, callback) => {
//     setTimeout(() => {
//         // console.log("Logged in");
//         callback(email);
//     }, 2000);
// }

// const loggedIn = loginUser("syedwaqarunnabi@gmail.com" , 12345 , (email) =>{
// console.log("User Logged In" , email)
// });









const getUserVideos = (email,callback) => {
    setTimeout(() => {
        callback(["video1" , "video2" , "video3"]);
    }, 2000);
}

const loggedIn = loginUser("syedwaqarunnabi@gmail.com" , 12345 , (email) =>{
console.log("User Logged In" , email)
getUserVideos(email, (videos) =>
console.log(videos))
});