let playerNames = ['Rohit','Virat','Surya','Hardik','KlRahul','Jadeja']
console.log(playerNames[0])
console.log(playerNames[1])
console.log(playerNames[2])
console.log(playerNames[3])
console.log(playerNames[4])
console.log(playerNames[5])

playerNames[0] = "Rohit Sharma"
playerNames[1] = "Virat Kohli"

console.log(playerNames)
console.log(typeof playerNames)
console.log(Array.isArray(playerNames))


//Output
//---------
//[ 'Rohit', 'Virat', 'Surya', 'Hardik', 'KlRahul', 'Jadeja' ]

// length of an Array 
console.log(playerNames.length)

// Output
// -------
// 6

// Accessing Specefic Player Names By using its Index Number
console.log(playerNames[0])
console.log(playerNames[1])

//Output
// Rohit
// Virat


// accessing the last element
console.log(playerNames[playerNames.length-1])

// Output
// ------
// Jadeja


// changing the name of a particular index
// just changing it to small case from uppercase
playerNames[5] = "jadega"
console.log(playerNames[5])

// Output
//--------
// jadega

// a way to  declare an array using new keyword but not recomended.
let names = new Array('nameOne','nameTwo')
console.log(names)


// Output
// -------
// [ 'nameOne', 'nameTwo' ]


// push mean to insert the value inside array and 
// it will add the item at the end of an array
playerNames.push('Tendulkar')
console.log(playerNames)

// Output
// ------
// [
//   'Rohit',
//   'Virat',
//   'Surya',
//   'Hardik',
//   'KlRahul',
//   'jadega',
//   'Tendulkar'
// ]

// how to fetech multiple vales from an array
// here the ending point will be exclusive
console.log(playerNames.slice(1,3))

//Output
// --------
// [ 'Virat', 'Surya' ]


// splice used to insert value inside array
// 3 mean from where it will start adding elements
// 1 mean how many elements to delete.

playerNames.splice(3,1, 'Axar Patel','MsDhoni')
console.log(playerNames)

// Output
// ------
// [
//   'Rohit',
//   'Virat',
//   'Surya',
//   'Axar Patel',
//   'MsDhoni',
//   'KlRahul',
//   'jadega',
//   'Tendulkar'
// ]

