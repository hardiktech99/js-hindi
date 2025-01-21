


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

console.log(loginUserMessage("Hardik"));
