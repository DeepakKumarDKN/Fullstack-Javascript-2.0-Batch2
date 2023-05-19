const user =  {
  username:'hitesh',
  price: 99,

  welcome:function(){
    console.log(`Hi, ${this.username}, welcome to website`)
  
  }
}


user.welcome()

user.username = "Sam"
user.welcome()

// this always refer to current context
// this is mostly used in objests not in functions

/*
function chai(){
  let usename = 'deepak'
  console.log(this.username)
  //no need fs using this inside the function
}
*/

/*
const chai = function(){
  let username ="deepak"
  console.log(this.usename)
  // we will get undefined here
}
*/

// arrow function
// wrapping inside the curly braces we have to use return keyword otherwise not required

const add = (num1,num2)=>{
  return num1+num2
}

console.log(add(3,4))

//arrow functions  without curly braces  [no need to write return]

const addNumber = (num1,num2) => num1+num2
console.log(addNumber(4,5))

// arrow function with objects

//const displayDetails = (num1,num2) => {name:'deepak'}
//console.log(displayDetails())
// this will lead to undfined because we cannoot return objects like this we have to keep it
// inside the parenthesis.


const displayDetails = (num1,num2) => ({name:'deepak'})
console.log(displayDetails(3,4))

