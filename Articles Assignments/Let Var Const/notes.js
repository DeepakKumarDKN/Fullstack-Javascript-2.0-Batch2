// hitesh sir notes 

const accountId = 12345
let accountEmail = "deepak@gmail.com"
var accountPassword = "12345"
accountCity = "Odisha"


// const is smoething which doesnot allow you to change.
// accountId = 90786

// here i am trying to change the value of accountId, which cannot be done so we will get an error here
console.log(accountId) 

//TODO: Error : TypeError: Assignment to constant variable.



//TODO: let accountEmail = "deepak@gmail.com"

//accountEmail = "deepakkumar@gmail.com" // this is allowed.
console.log(accountEmail) 

console.table([accountId,accountEmail,accountPassword,accountCity])

/*
  no need of using var during variable declaration because of issue in 
  block scope and functional scope.
*/

let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
// In javascript if after declaring we are not assigning any value to them then we will get 
//undefined its not an error its a special keyword in Javascript.