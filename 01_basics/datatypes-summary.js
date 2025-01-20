// # Primitive 

// 7 Types : string, Number, Boolearn, null, undefined, symbol, BigInt

const score = 100
const scoreValue  = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

// console.log(id === anotherId);

// const bigNumber = 5656566556565626656556n

// console.log(typeof bigNumber);



// Referance (Non primitive)

// Array, Objects,  Functions

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name : "hardik",
    age : "29",
}

const myFuncation = function(){
    console.log("Hello World");
    
}
console.log(typeof id);

// https://262.ecma-international.org/5.1/#sec-11.4.3