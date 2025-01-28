
const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

 
// const myNewObject =  Object.create(null)

const chai = {
    name : "Ginger Chai",
    price : "250",
    isAvailavle : true,

    orderChai: function (){
        console.log("chai nahi bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai, "name", {
    // Writable:false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
} 