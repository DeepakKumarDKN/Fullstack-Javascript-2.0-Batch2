// Function 
// Function prevent us from writting the same block of code again and again to get some particular result
// lets say for en example we are working on a project and we have to write a block of cod again and again
// to get some result but writting the same block of code again and gain its not necessary so 
// instead of writting the same block of code again and gain we can make a fuction for that block of code
// and we can call that function 



// normalFunction

function add(){
  let a = 10
  let b = 20 
  console.log('Sum is:', a+b)
}
add()

// function with arguments and parameters
function sum(value1, value2){
  console.log(`the sum is: ${value1 + value2}`)
}

sum(10,20)

// function with return type
function addNumbers(value1, value2){
  let result = value1 + value2
  return result
}

let addresult = addNumbers(10,20)
console.log(addresult)

//string

function url(url,domain){
  let conn = 'https://'
  let result = conn + url + domain
  return result

}

let finalurL= url('www.youtube','.com')
console.log(finalurL)

//
function addnumbers(arr){
  let sum = 0
  for(let i of arr){
    sum = sum+i
  }
  return sum
}
let array = [10,20,30]
result = addnumbers(array)
console.log(result)

//

function addnumbersagain(){
  let sum = 0
  for(let i of arguments){
    sum = sum+i
  }
  return sum
}

result = addnumbersagain(10,20)
console.log(result)
 
// performing the same operation using normal for loop

function add(){
  let sum = 0
  for(let i =0; i<arguments.length; i++){
    sum = sum+arguments[i]
  }
  return sum
}
resultone = add(10,20,30)
console.log(resultone)

// arrow function

let deepak = (...elements) =>{
  sum = 0;
  for (let i of elements){
    sum = sum+i
  }
  return sum
}
result = deepak(10,20,2)
console.log(result)

// functions declaration

function happybirthday(){
  console.log('Happy Birth Day')
}
happybirthday()

function isEven(number){
  return number % 2 ==0
}

console.log(isEven(10))

function FindTarget(array, target){
  for(i=0; i<array.length; i++){
    if(array[i] == target){
      return i
    }
  }
}

// function declaration Example

// function displayDetails(){
//   let name = "deepak kumar"
//   let surname = "nayak"
//   console.log(`full name is: ${name} ${surname}`)
// }
// displayDetails()

// function example ith parameter and arguments

function displayDetails(firstname, lastname){
  console.log(`full name is: ${firstname} ${lastname}`)
}
displayDetails('Deepak Kumar','Nayak')

// function displayoddNumbers(numbers){
//   for(let i of numbers){
//     if( i % 2 !== 0){
//       console.log(i)
//     }
//   }
// }

// displayoddNumbers([2,5,9,8,12,15,17])

// function with argument object:


