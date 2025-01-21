


function saymyName() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("D");
    console.log("I");
    console.log("K");
}
// saymyName();

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumber(3, 5) 
// console.log("Result is :", result);



function loginUserMessage (username = "sam"){
    if(undefined){
        console.log("Please enter user name");
        return
    }
    return `${username} Just Logged In`
}

// console.log(loginUserMessage("Hardik"));

// console.log(loginUserMessage("Hardik"));

function calucalateCartPrice (val1,val2, ...num1){
    return num1
}
// console.log(calucalateCartPrice (200,400,500,600,2000));

const user ={
    username : "Hardik Padaliya",
    price : "$999"
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject (user);     
handleObject ({
    username : "Jay",
    price : 399
});                       

const myNewArray = [200,400,500,600]

function returnSecoundValue(getArray) {
    return getArray[2]
}

// console.log(returnSecoundValue(myNewArray));

console.log(returnSecoundValue([200,400,500,600]));
