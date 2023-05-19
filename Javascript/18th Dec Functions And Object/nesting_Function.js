// const numOne = 1;
// const numTwo = 2
// const name = "Deepak Kumar";

// function displayDetails(){
//   return numOne*numTwo
  
// }

// const result = displayDetails()
// console.log(result)

// function getScrore(){
//   let num1 = 90
//   let num2 = 30

//   function add(){
//     return `${name} scored ${num1+ num2}`
//   }
//   return add()
// }

// console.log(getScrore())


// function which are defined inside the global scope can access all the variables defined in the global scope
// if you want to access the variables which are defined in the global scope in a nested function, then also we can access it 
// because it is being defined in the global scope

// but if a function is defined inside another function which is known as the nesting function can also access all the variables 
// which are defined in the global scope or any other variables to which parent has its access.

// but the function which is defined in the global scope cannot access those variables which are defined in the nestiing function.

// var x = 1;
// a()
// b()
// console.log('accessing it in the global scope:', x)

// function a(){
//     let x = 10
//     console.log('accessing it inside the function a:', x)
// }
// function b(){
//     let x = 100;
//     console.log('accessing it inside function b:', x)
// }



function app(){

    addnumbes = (num1,num2) =>{
        return num1+num2
    }

    multiplyNumbers = (num1, num2) =>{
        return num1* num2
    }

    console.log(addnumbes(10,20))
    console.log(multiplyNumbers(20,30))
}

app()