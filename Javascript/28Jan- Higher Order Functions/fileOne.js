// Higher order functions are function which take another function as a parameter or return a function as a value 
// the function passed as parameter is called as callback.

// callbacks are mostly used in asynchronous programming.

// passing a function inside another function while calling a function that passed function will behave as a 
// callback function

// so callback function can also be passed as a parameter inside anoter funtion


const callback = (n)=>{
  return n**2
}




// function cube(callback,n){
//   return callback(n)*n
// }

// console.log(cube(callback,2))

/*

//callback example
function sayHello(){
  console.log('hello')
}

function sayHi(){
  console.log('hi')
}

function displayData(a,b,callback){
  console.log(a+b)
  callback()
}


displayData(10,20, sayHello)
displayData(50,60, sayHi)

*/

//forEach Example

// const arr = ['Hey','Hi','Hello','Hola','Namastey']
// arr.forEach((elements)=>{
//   return elements
// })

// console.log(arr)

// setTimeout(() =>{
//   console.log('arey kya hua bhai eetna late kyun ayya ')
// },2000)


// in setinterval it will start print after every 2sec
// setInterval(()=>{
//   console.log('hello')
// },2000)


// map 

// without using map

// for(let i =0; i<numbers.length; i++){
//   console.log(numbers[i] **2)
// }

// performing it with the help of map
// const numbers = [2,3,4,5,6,7,8,9,10]
// const arr = numbers.map((elem)=>{
//   return elem ** 2
// })

// console.log(arr)

// TODO: Map simply returns an array

//filter

// const players = ['Rohit','Virat','Kohili','Dhoni','Jadega','Sehwag','Sachin','Surya','Yuvraj','Raina','Shradul','Jasprit','Chahal']
// const result = players.filter((elem)=>{
//   if(elem.length == 5){
//     return elem
//   }
// })

// console.log(result)

// Example Two

const data = [
  {companyName:'TCS', companyType:'Service', companyRevenue: 500000, company_startDate: 1990},
  {companyName:'GOOGLE', companyType:'Product', companyRevenue: 800000, company_startDate: 2000},
  {companyName:'DEBUYG', companyType:'Service', companyRevenue: 900000, company_startDate: 2021},
  {companyName:'FLIPKART', companyType:'Product', companyRevenue: 1200000, company_startDate: 2002},
  {companyName:'AMAZON', companyType:'Product', companyRevenue: 700000, company_startDate: 2002}

]

// const filterData = data.filter((company)=>{
//   if(company.companyType == "Product"){
//     return company.companyName
//   }
// })

// console.log(filterData)

// const filterData = data.filter((company)=>{
//   if(company.companyRevenue >= 500000){
//     console.log(company.companyName)
//   }
// })

// filter only those companynames whose length is greater than 6
// const filternames = data.filter((company)=>{
//   if(company.companyName.length>=6){
//     return company
//   }
// })  

// console.log(filternames)

// return will gives you an entire array but instead of printing array if you want to print 
// only names of the company then instead of returing we can gor for print.

// const filternamess = data.filter((company)=>{
//   if(company.companyName.length>=6){
//     console.log(company.companyName)
//   }
// })  



// reduce
// Reduce takes a callback function. The callback Function takes the accumulator, current and optional initial value as a parameter and returns a single value. It is good practcise to define an initial value for the accumulator value. if we donot specify this parameter bu default accumulator will get aray first value, if our array is an empty aray then Javascript will throw and error

// const num = [10,20,30,40,50]
// const sum = num.reduce((acc,curr)=>{
//   return (acc+curr)
// },0)


// console.log(sum)

//TODO: Sort

// const playerNames =['Rohit Sharma','Shubman Gill','Cheteshwar Pujara','Virat Kohli','KL Rahul','Ajinkya Rahane','Ravichandran Ashwin','Axar Patel','Ravindra Jadeja']

// console.log(playerNames.sort())

//reverse

// console.log(playerNames.reverse())

// Destructuring Spread Rest
const playerNames = ['Virat','Surya','Rohit','Bumrah','Siraj']
// let[Batsmen, MiddleOrderBatsmen, OpeningBatsmen, 
//   FastBowler, SwingBowler ] = playerNames




// Skip any value 

let[Batsmen ,, OpeningBatsmen ,,  SwingBowler ] = playerNames
console.log(OpeningBatsmen)


//TODO: Spread and Rest
// both are denoted by ... , when we are spreadig something or sending some data, expanding something then spead is being used , and when we are receiving s0me data then we shoud go for rest


// sending some data and while sending some data all or data will get expanded so at that time we have to use spread operator

function sum(x,y){
  return x+y
}

let vari = [1,2]
console.log(sum(...vari))
