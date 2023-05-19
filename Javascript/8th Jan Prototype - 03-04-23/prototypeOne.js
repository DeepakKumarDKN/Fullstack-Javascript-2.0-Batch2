let myHeros = ['Thor','Spiderman']
let dcHeros = ['Batman','blackAdam','Superman']


let heropower = {
  thor:'hammer',
  spiderman: 'Flying',
  getspiderPower : function(){
    console.log(`Spidy Power is: ${this.spiderman}`)
  }
}

Object.prototype.hitesh = function(){
  console.log('hello')
}

myHeros.hitesh()



// inheritance

const User = {
  user_name: 'Deepak',
  email : 'deepak@gmail.com'
}

const Teacher = {
  name: "Anurag Sir",
  profession: 'Professional Coder',
}

const TeachingSupport = {
  isAvailable: true,
  __proto__: Teacher,
  // now all the properties from Teacher is inherited to Teaching Spport
}

console.log(TeachingSupport)

//old syntax
TeachingSupport.__proto__ = User
console.log(TeachingSupport.user_name)

//modern syntax
Object.setPrototypeOf(Teacher, User)



let myname = "    deepak   "
String.prototype.trueLength = function(){
  return`true length is: ${this.trim().length}`
}

let myArray = [10,20,30,40,50,60]
Array.prototype.insertElement = function(){
  this.push(90)
  return this
}


// total Length 
// Array.prototype.totalLength = function(){
//   return `the length of an aray is: ${this.length}`
// }



