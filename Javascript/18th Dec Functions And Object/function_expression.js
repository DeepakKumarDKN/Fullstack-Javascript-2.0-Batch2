// //TODO: Example One

// const happyBirthday = function(){
//   console.log('Happie Birthday')
// }

// happyBirthday()

// // TODO: Example Two
// const sum = function(numbers){
//   let addition = 0
//   for(let i of numbers){
//     addition = addition + i
//   }
//   return addition
// }

// console.log(sum([10,20,30]))

// // TODO: Example Three
// const findEvennumber = function(num){
//   for(let i of num){
//     if(i % 2 ==0){
//       return i
//     }
//   }
// } 

// console.log(findEvennumber([3,5,9,4]))

// // todo find odd target

// const findoddTarget = function(numbers){
//   for(let i of numbers){
//     if(i % 2 !==0){
//       return i
//     }
//   }
// }

// console.log(findoddTarget([10,20,30,5]))

// // find lengthof name greater than 6
// const findlengthName = function(names){
//     for(let i of names){
//       if(i.length>=6){
//         return i
//       }
//     }
// }
// console.log(findlengthName(['depak','rahul','krishna']))

// const displayNumbers = function(){
//   return arguments
  
// }


// displayNumbers(10,20,30,40)
// console.log(result)

const displayDetails = function(firstname, lastname){
  return (`full name is: ${firstname} ${lastname}`)
}
const result = displayDetails('Deepak Kumar','Nayak')
console.log(result)
console.log(displayDetails('Deepak Kumar','Nayak'))
