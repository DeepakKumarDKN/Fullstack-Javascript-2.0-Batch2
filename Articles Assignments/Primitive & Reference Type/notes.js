// primtive datatype
// -----------------
// let personepneAge = 28
// let persontwoAge = persononeAge

// assigning the age of person one to person two now both are having the same age 
// console.log(persononeAge) - 28
// console.log(persontwoAge) - 28

// Now i will increase the value of persononeAge
// persononeAge++-

// console.log(persononeAge) - 29
// console.log(persontwoAge) - 28

// reference datatype
// ------------------
// let arrayOne = [10,20,30,40]
// let arrayTwo = arrayOne

// arrayOne.push(50)

// console.log(arrayOne)
// console.log(arrayTwo)

// Note: here what is happening if i am doing any changes to arayOne ts getting reflected to arrayTwo
// now lets leran why this is happening.

// Primitive is getting store in the stack and in the stack all are getting diffrent memory space 
// personageOne and personageTwo both are getting the diffrent memory space in stack thats why when i am doing any changes
// to personageOne it's not getting reflected to personageTwo

// primtive type doesnt take more memory.

// Reference Type:
// ---------------
// Here i have taken two Array and these arrays are getting stored inside the heap which contain some address 
// and in the stack there is something called pointer which is pointing towards the addess of arrayOne or having the address of arrayOne

// thought we have two array, arrayOne and arrayTwo both are having their own pointer:
// but if i am writtng arrayTwo = arrayOne then poiinter of arayTwo will also points towards the address of arrayOne

// both are having two diffrent pointer but both are pointing to the same address. 
// that's why if i am doing any changes to arrayOne its getting reflected to arrayTwo.



let username = "deepak kumar"
let city = "Kolkotta"

personDetails = {
    username :"deepak",
    city: "Kolkotta"
}

let personData = personDetails

personData.name = "rahul krishna vaidya"

console.log(`value of username from personDetails: ${personDetails.name}`)
console.log(`value of username from personDetails: ${personData.name}`)