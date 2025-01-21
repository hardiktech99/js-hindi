// singleton
// object.create
// object literals

const mySym = Symbol ("key1")

const JsUser = {
    name: "Hardik",
    "Full Name": "Hardik Padaliya",
    [mySym]: "mykey1",
    age: 29,
    location: "Surat",
    email: "hardik@company.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Frinday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);


JsUser.email = "hardik@google.com"
// Object.freeze(JsUser)
JsUser.email = "hardik@ms.com"
// console.log(JsUser);

JsUser.greetings = function () {
    console.log("Hello Js User");
}

JsUser.greetingsTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());