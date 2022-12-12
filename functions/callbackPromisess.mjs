let exp = "name=ali;age=45;prof=dev;color=red";

// let result = {};

// result = exp.split(';');

// console.log(result);
// console.log(typeof result);



// console.log("One");

// const getDataFromServer = () => {
//     console.log("gettting data from server..");

//     setTimeout(() => {
//         console.log("Data received from server..");
//         let data = "555";
//         return data;

//     }, 5000);

// };
    
//     const result = getDataFromServer();
//     console.log(result);





// const getDataFromServer = () => {
//     console.log("gettting data from server..");

//     setTimeout(() => {
//         console.log("Data received from server..");
//         let data = "555";
//         callback(data);

//     }, 2000);

// };

// const callback = (data) =>{

//     console.log(data);
// };
    
//     const result = getDataFromServer(callback);










// const getDataFromServer = (cb) => {
//     console.log("gettting data from server..");

//     setTimeout(() => {
//         console.log("Data received from server..");
//         let data = "555";
//         cb(data);

//     }, 2000);

// };

// const callback = (data) =>{

//     console.log(data);
// };
    
//     const result = getDataFromServer(callback);


// const makeParatha = () => {
//     console.log(message);
// };




// const makeAlluParatha = (callback) => {

//     setTimeout(() => {
//         cancelIdleCallback("Paratha done!");
//     }, 2000);
    
// }


// const makeMethiLassi = () => {

//     setTimeout(() => {
//         callback("Lassi done!");
//     }, 2000);
    
// }


// makeAlluParatha(function()


// )


// online class
// Asynchronous JavaScript



// function makeFryEgg(callback){
//     setTimeout(function(){
//         callback("Egg is ready");
//     }, 2000);

// }


// function makeToastBread(callback){
//     setTimeout(function(){
//         callback("Toast Bread is ready");
//     }, 3000);

// }

// makeToastBread(function (result){

//     console.log(result);
//     makeFryEgg(function(result){
            
//             console.log(result);
//         });
// })
   
function getToastPromise(){
return new Promise(function(resolve, reject){
    let wifeMood = 7;
    setTimeout(function(){
    if(wifeMood >= 5){
        resolve("Toast is ready");
    }
    else{
        reject("wife is in bad mood");
    }
    }, 2000);
});

}


function getEggFryPromise(){
    return new Promise(function(resolve, reject){
        let wifeMood = 7;
        setTimeout(function(){
        if(wifeMood >= 5){
            resolve("Egg is ready");
        }
        else{
            reject("wife is in bad mood");
        }
        }, 2000);
    });
    
    }


// getToastPromise().then(function(result){
//     console.log(result);
//     return getEggFryPromise()
//     .then(function(result){
//         console.log(result);
//     })
// })
// .catch(function(error){

//     console.log(error);
// })


// Await and Async

async function breakfast(){
    try{
        let toast = await getToastPromise();
        console.log(toast);
        let egg = await getEggFryPromise();
        console.log(egg);
    }
    catch(error){
        console.log(error);
    }
}

breakfast();