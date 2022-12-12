
const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {    
    setTimeout(() => {
        if (email === "syedwaqarunnabi@gmail.com" && password === 12345) {
        resolve(email);
        } else {
        reject("Invalid Email or Password");
        }
    }, 2000);
})

}



const getUserVideosPromise = (email) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(email){
        resolve(["video1" , "video2" , "video3"]);
        }else{
        reject("No Videos Found");
        }
    }, 2000);
})

}





// Asynchronous JavaScript & NodeJS
// async function and await keyword



const getUserDetails = async () => {

    try {
    let userData = await loginUserPromise("syedwaqarunnabi@gmail.com" , 12345)
    console.log(userData);
    let VideosData = await getUserVideosPromise(userData)
    console.log(VideosData);
    } 
    catch (error) {
        console.log(error)
    }
    
}

getUserDetails()



