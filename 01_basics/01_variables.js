const accountId = 144553
let accountEmail = "hardik@gmail.com"
var accountPassword = "123456"
accountCity = "Surat"
let accountState;

// accountId = 2 // not allowed

accountEmail ="hp@gm.com"
accountPassword = "5656560"
accountCity = "Navsari"

console.log(accountId);

 /*
 Prefer not to use var
 because of issue in black scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
