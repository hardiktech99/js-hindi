// let myName = "Hardik     "
// let myChannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.hardik = function () {
    console.log(`Hardik is present in all objects`);
}
Array.prototype.heyHardik = function () {
    console.log(`Hardik say hello`);
}

// heroPower.hardik()
// myHeros.hardik()
// myHeros.heyHardik()
// heroPower.heyHardik()


// inheritance

const user = {
    name : "chai",
    email : "chai@google.com",
}

const teacher = {
    makeVIdeo : true,
}

const teachingSupport = {
    isAvailable : false,
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__: teachingSupport,
}


teacher.__proto__ = user 

// morden syntax

Object.setPrototypeOf(teachingSupport, teacher)


let anotherUsername = "ChaiAurCode      "
String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"Hardik".trueLength()
"iceTea".trueLength()