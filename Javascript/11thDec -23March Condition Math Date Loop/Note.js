//conditions if else condition 

// let stars = 5;
// if (stars == 5){
//   console.log('It is a good resturant')
// }else if(stars == 4){
//   console.log('It is an average resturant')
// }else if(stars == 3){
//   console.log('It is an medium type resturant')
// }else{
//   console.log('Not an Good Resturant')
// }


// switch case
// let user = "Admin";

// switch (user) {
//   case "Admin":
//     console.log('Redirect him/her to the admin page ')
//     break;

//   case "Student":
//     console.log('Showe him the courses he had taken')
//     break;

//   case "Mentor":
//     console.log('Redirect Him to Mentor Page')

//   default:
//     console.log('You are not allowed to any of our page Thank You')
//     break;
// }

// Note: Majority of the people use if else not swtich case

// Trenary Opeator
// Note: Ternary operator is created using ? and :
// anything which is written after ? is true and 
// anything which is written after : is false and before ? we will write Condition

// condition ? true : flase

// let age = 20;

// age < 22 ? console.log('true'): console.log('False')

// isLogin = false;

// isLogin ? console.log('You are Loggedin plz logout'): console.log('You are not Logged  please login')
// Condition ? true : false

//TODO: Array
//let userName = ['Rohit','Virat','KlRahul','Subhman','Surya','Hardik','Jadega']

//console.log(userName)

//accessing specefic username

//console.log(userName[0])

// TODO:Date

// const now = new Date()
// console.log(now)
// console.log(now.toString())
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDay())
// console.log(now.getDate())
// console.log(now.getTime())

// TODO: Math
// const PI = Math.PI;
// console.log(PI)
// console.log(Math.round(PI))
// console.log(Math.round(9.8))
// console.log(Math.floor(9.5))
// // floor is something where the value is comming down

// console.log(Math.ceil(9.5))
// // ceil is something where the value is going up.

// console.log(Math.min(20,30,40))
// console.log(Math.max(20,30,40,50))

// console.log(Math.round(Math.random()*50)
// console.log(Math.pow(3,5))

// console.log(Math.log(2))

// console.log(Math.sin(90))

// Loops
// let i = 0
// do{
//   console.log('value of i is:',i)
//   i++
// }while(i<=5)

// let j = 0;
// while(j<=5){
//   console.log('Value of J is:',j)
//   j++
// }

// for(let i=0; i<=5; i++){
//   console.log(i,'x', i ,"=", i*i);
// }



// let firstName = "deepak"
// let lastName = "Kumar"

// if (firstName == "deepak" || lastName[lastName.length-1] == "k"){
//   console.log('Authorization is successfull Login Please')
// }else{
//   comsole.log('You are Not Allowed For Login Authorization is unsuccessfull')
// }

// let age = 9;
// let drivingTest = true;

// if (age>=19 && drivingTest == true){
//   console.log('You are eligible for driving license')
// }else{
//   console.log('You are not eligible for driving license')
// }

// let finalYearStudent = true;
// let passMarks = Number(789);
// let totalBacks = 2

// if (finalYearStudent == true){
//   if(passMarks>=789){
//     console.log('You are Eligble For Placement')
//   }
//   else{
//     console.log('You are Not Eligible For Placement')
//   }
// }else{
//   console.log('You are not a final Year Student')
// }
// let count = 0

// while(count<=5){
//   console.log('Loop Execution starts:',count)
//   count=count+1;
// }
// console.log(`The while loop stops because count value is ${count} which is more than 5`)

//do while example 

// let userName= "deepak"
// for(let i= 0; i<userName.length; i++){
//   console.log(userName[i])
// }

let userName= "deepak"
for(let i= 0; i<userName.length; i++){
  if(userName[i] === "p"){
    continue;
  }else{
    console.log(userName[i])
  }
}