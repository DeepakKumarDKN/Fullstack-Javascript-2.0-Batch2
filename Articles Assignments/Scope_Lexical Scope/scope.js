// function display(){
//   var a = 10
//   function displayAgain(){
//     console.log(a)
//   }
//   displayAgain()
// }

// display()

// function displayDetails(){
//   var username = 'deepak kumar'
//   let surname = 'nayak'
//   const location = 'India'
//   console.log(username)
//   console.log(surname) 
//   console.log(location)

//   function displayData(){
//     console.log(username)
//   }
//   displayData()

// }

// displayDetails()
// console.log(username)

// console.log(username) //not accessible here

// function displayDetails(){
//   var username = "deepak"
//   console.log(username)
// }
// console.log(username)  // not accessible here


// block scope example:

// function displayNumbers(){
//   if (true){
//     var a = 30 
//     let b = 40
//     const c = 50
//   }
//   console.log(a) // a can be accessibile because here a is not a block scope
//   console.log(b) // cannot be accessed it here as it acts as a block scope
//   console.log(c) // cannot be accessed it here as it acts as a block scope
// }

// displayNumbers()

// Example for lexical enironment

var userName = 'deepak'

function displayDetails(){
  console.log(userName)
  function Data(){
    console.log(`accessing it inside the inner function: ${userName}`)
  }
  Data()
}

displayDetails()