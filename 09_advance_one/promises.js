const promiseOne = new Promise((resolve,reject) => {
    // DB an async task
    // DB Calls, cryptography, newtwork
    setTimeout( function(){
        console.log("Async task is complete");
        resolve()
    } ,1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
}).then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Hardik Padaliya" , password : "123456"})
        }else{
            reject("Error : Something Want Wrong")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The Promise is either resolved or rejected");
})



const promiseFive = new Promise (function(resolve , reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "JavaScript" , password : "987654"})
        }else{
            reject("Error : Js Want Wrong")
        }
    },1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// async function getAllUsers (){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:" , error);
//     }
// }
// getAllUsers()


fetch("https://api.github.com/users/hardiktech99")
.then( (response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})

