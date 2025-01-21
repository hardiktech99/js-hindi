const user = {
    username : "Hardik",
    price : "$399",

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to my store`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Jay"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Hardik"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "Hardik"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Hardik"
    console.log(this);
}

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1 , num2) =>  ({username :"hardik"})
console.log(addTwo(3,5));

const myArray = [2,5,6,8,7,8]

myArray.forEach()
