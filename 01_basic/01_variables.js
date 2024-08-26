const accountId = 144553
let accountEmail = "pnidhi2@gmail.com"
var accountPassword = "12345"
accountCity = "Janakpur"
let accountState;


// accountId = 2 // not allowed

accountEmail = "nidhi@gmail.com"
accountPassword = "21212121"
accountCity = "Kathmandu"


console.log(accountId);
/*
Prefer not to use var
bacause of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
