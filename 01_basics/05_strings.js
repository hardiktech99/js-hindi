const name = "hardik"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} any my repo count is ${repoCount}.`);



const gameName = new String('Hardik-game');
// console.log(gameName[0]); 
// console.log(gameName.__proto__); 
// console.log(gameName.length); 
// console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-10,4)
console.log(anotherString);


const newStringOne = "    Hardik    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hardik.com/hp_54545dvdv55%20454545"
console.log(url.replace('%20','_'));

console.log(url.includes('hardik'));


console.log(gameName.split('-'));
