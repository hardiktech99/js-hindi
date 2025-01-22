// for iN loop --------------------------------------------------------------


// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject = {
    js : "Javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "Swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
    
}

// const map = new Map()
// map.set("IN" , "India")
// map.set("US" , "USA")
// map.set("Fr" , "France")

// for (const key in map) {
//     console.log(key);
// }