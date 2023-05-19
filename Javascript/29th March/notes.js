//syntax for try and catch

// try{
//   console.log(deepak)
// }catch(err){
//   console.log(err.name)
// }

// eexample 2

// try{
//   let firstName = "deepak"
//   console.log(firstname)
// }catch(err){
//   // console.log(`${err.name}`)
//   console.log(`${err.message}`)
//   // console.log(`${err.stack}`)
// }

// Errors in Javascript

/*
Eval Error
Range Error
Reference Error(important)
Syntax Error (important)
Type Error
URI Error
Aggregate Error
*/


// try{
//   let numbers = [10,20,30,40,50]
//   for(let i of numbers)
//     console.log (d)
// }catch(error){
//   if(error instanceof SyntaxError){
//     console.log(error.message)
//   }else if(error instanceof ReferenceError){
//     console.log(error.message)
//   }
// }

// TODO: Promises
// We have to write new if we want to create a promise
// where we have to wait there we can use wawait in this example
// i need to wait for the credentials.


const one = () =>{
  return 'one'
}

const two = () =>{
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      resolve('credit credential')
    }, 3000)
  })
}

const three = () =>{
  return 'three'
}

const results = async () =>{
  let valOne = one()
  console.log(valOne)

  let valTwo = await two()
  console.log(valTwo)

  let valThree = three()
  console.log(valThree)
}

results()


// TODO Event loop


// function One(){
//   console.log('one')
// }

// function Two(){
//   setTimeout(() => {
//     console.log('Inside set timeoute')
//   },3000);
//   console.log('I am from function two printing after 3 second')
// }

// function three(){
//   console.log('I am from function three')
// }

// One()
// Two()
// three()