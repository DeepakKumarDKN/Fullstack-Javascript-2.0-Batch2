let userName = {
  firstname:'deepak',
  lastname:'nayak',
  courseTaken: 'Fullstack Javascript BootCamp 2.0',
  isCompleted:false,
  hobbies: ['reading','listening songs']
}
//TODO: how to access data fom objects

// console.log(userName)
// console.log(userName.firstname)
// console.log(userName['firstname'])

//TODO: for in loop are used in objects

// for(let i in userName){
//   console.log(i,":", userName[i])
// }

//TODO: adding a key value pair to an object with . notaion
// userName.gender = "male"
// console.log(userName)

// TODO: Another way of addding key alue pair ith the help of bracket notation
// userName['location'] = 'Odisha'
// console.log(userName)

// TODO: In javascript by default the key is in string format

// const key = "email"
//userName[key] = "deepak@gmail.com" // we can write like this

// behind the scenes it is looking like
// userName['email'] = "deepak@gmail.com"
// console.log(userName)

// how to iterate object 
// it can be done by two ways
// 1. for in loop
// 2 Object.keys

//iterating by for in loop
// for(let i in userName){
//   console.log(i, ":", userName[i])
// }


// iterating using for Object.keys with the help of for of loop
// for(key of Object.keys(userName)){
//   console.log(key, ":", userName[key])
// }


// TODO: spread operator
// const arrayOne = [1,2,3,4]
// const arrayTwo = [5,6,7]

// const result = [...arrayOne, ...arrayTwo]
// console.log(result)

// spread operator in objects

// const persononeInfo = {
//   userName : 'deepak',
//   email: 'deepak@gmail.com' ,
//   location : 'Odisha'
// }

// const persontwoInfo = {
//   Name : 'Rahul',
//   mail : 'rahul@gmail.com',
//   city: 'Mumbai'
// }

// const userDetails = {...persononeInfo, ...persontwoInfo}
// const newObject = {..."abc"}
// const objectOne = {...['item1','item2']}
// console.log(userDetails)
// console.log(newObject)
// console.log(objectOne)

// Object destructuring

let playerInfo = {
  playerName : "Rohit Sharma",
  runsscored : 3459,
  totalFifty : 20,
  totalHundred : 30,
  strikeRate: 42.5,
  iplteamName: "Mumbai Indians",
  iplTitle : 5
}

// const {playerName, runsscored, totalFifty, totalHundred, strikeRate} = playerInfo

// console.log(`PlayerName: ${playerName} RunsScored: ${runsscored} `)

// TODO: Assigned it to a new key [pname]

let {playerName : pname} = playerInfo
//console.log(playerName) // Reference error 
// the reson behind getting error because we have assigned the value of playerName to pname
// fetching ith pname will gie us the correct output.

//console.log(pname)

// TODO: Used spread operator to store some info
//const {playerName, runsscored, totalFifty, totalHundred, strikeRate , ...iplInfo} = playerInfo
// by writting like this ...iplInfo 
// all the ipl info will come into iplinfo console it for detail though i am using
// spread operator thats why all the info will get into iplinfo

//console.log(iplInfo)

//Output
//--------
//{ iplteamName: 'Mumbai Indians', iplTitle: 5 }


// TODO:Objects inside array used for real world application

const usersInfo = [
  { userid:1, firstname: 'deepak', gender:'male' },
  { userid:2, firstname: 'rahul' , gender:'male'},
  { userid:3, firstname: 'aly' , gender:'male'}
]

//consoling it directly
// console.log(usersInfo)

// acccessing it using for of loop
// for(let i of usersInfo){
//   console.log(i)
// }

//accesssing it using for in loop
// only using i will give us the index thats why i am using 
// usersInfo[i]
for(let i in usersInfo){
  console.log(usersInfo[i])
}

//nested destructuring

const [{firstname:username}, , {gender:usergender}] = usersInfo
console.log(username)
console.log(usergender)
