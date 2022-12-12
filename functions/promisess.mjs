// Promise based functions 
// built function
// special

// const promise = new Promise((resolve, reject) => {

//     let myMaks = 50;
//     if (myMaks >= 50) {
//         resolve('You have passed the exam');
//     } else {
//         reject('You have failed the exam');
//     }


// })
// console.log(promise)







// const promise = new Promise((resolve, reject) => {

//     let myMaks = 50;
//     if (myMaks >= 50) {
//         resolve();
//     } else {
//         reject();
//     }


// })
// promise.then(() => console.log('You have passed the exam')).catch(() => console.log('You have failed the exam'))








// function getMyMarks() {
// return new Promise((resolve, reject) => {
//         let myMarks = 50;
//         if (myMarks >= 50) {
//             resolve("Passed");
//         } else {
//             reject("Failed");
//         }
//     })
// }

// getMyMarks().then((result) => {
//     console.log(result)
// })










// const loginUserPromise = (email, password) => {
//     return new Promise((resolve, reject) => {    
//     setTimeout(() => {
//         if (email === "syedwaqarunnabi@gmail.com" && password === 12345) {
//         resolve(email);
//         } else {
//         reject("Invalid Email or Password");
//         }
//     }, 2000);
// })

// }



// const getUserVideosPromise = (email) => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(email){
//         resolve(["video1" , "video2" , "video3"]);
//         }else{
//         reject("No Videos Found");
//         }
//     }, 2000);
// })

// }


// loginUserPromise("syedwaqarunnabi@gmail.com" , 12345)
// .then(email => {
//     console.log(email)
//     return getUserVideosPromise(email)
// })
// .then(videos => {
//     console.log(videos)
// })
// .catch(error => {
//     console.log(error)
// })










function job(data) {
    return new Promise((resolve,reject) => 
    {
        if(data = isNaN()){
            reject("error");

        }

        else if (data % 2 === 0 ){
            resolve("even")
        }

        else if (data % 2 === 1){
            reject("odd")
        }


    })

}


let promise = job("10").
then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})


// module.exports = job;