let arrayOne = [1,2,3,4,5,6,7,8,9,10]
console.log(Array.isArray(arrayOne))
console.log(arrayOne.length)
let arrayTwo = ['deepak']
console.log(Array.isArray(arrayTwo))

let arrayThree =[1,2,3,4,['deepak','kumar','nayak']]

console.log(Array.isArray(arrayThree[4]))