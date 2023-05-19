// some notes from hitesh sir javascript videos:
// Video Link : https://www.youtube.com/watch?v=suMvZWjjKbo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=9


// TODO: In javascript the datatypes are divided into twp types  they are: 

// 1. primitive datatype (string, number, boolean, undefined, null. Bigint, Symbol)
// 2. non primiive datatype (reference type): Array Objects.
                                                                                                          
/*

 primtive values are getting store inside the stack with diffrent memory space.
 the reference datatype are getting stored indside the heap

 The primitive datatypes are getting diffrent memory space inside the memmory.
 here in this example i am trying to change the age of personone so when i am 
 increasing the age of personOne its not getting reflected to personTwo because
 both are having diffrent memory space.
 
 let persononeAge = 29 
 let persontwoAge = persononeAge;

 persononeAge++

 console.log(persononeAge)
 console.log(persontwoAge)
 
*/

let arrayOne = [1,2,3,4]
let arreyTwo = arrayOne

arrayOne.push(10)

console.log(arrayOne)
console.log(arreyTwo)

/* 
  Objects and array get stored inside the heap and its takes more space as compared to the 
  primitive values.

  as i have discussed that objects and stored inside heap so if we are creating an objects that mean 
  an objects have its owm properties and referene value (objects and array) allows us to change , add, delete its properties 
  for example:

*/

let name = "deepak";
let surname = "nayak"

let person = {
  name: 'rahul'
}

person.name = "deepak kumar nayak"

console.log(person.name)
person.location = "Kolkotta"

console.log(person)


// so in the above example i am adding a property called location and changing the name of the 
// person , this can be done with reference values its allows us to change, add, delete its properties.

/*
TODO: NOTE:
 
Unlike the reference value the primitive value cannot have its properties so that mean we cannnot
add a property to a primitive value.

lets c now what is exactly happening in the reference value:-

suppose we have two array arrayOne and arrayTwo both are getting stored inside the heap memory
it also contain some address both are having diffrent address but if i will write something like 

arrayOne = arrayThree

now both the arrayOne and arrayThree both are pointing to the same memory address
and thats why if we perform any changes in the arrayOne it will reflect to arrayThree


*/


arrayOne = [1,2,3,4,5]
arrayTwo = [6,7,8,9]

arrayThree = arrayOne

arrayOne.push(90)

console.log(arrayOne)
console.log(arrayThree)


console.log("1"+ 2+2)