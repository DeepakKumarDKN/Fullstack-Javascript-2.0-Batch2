// const anotherArray = [...arrayOne, ...arrayTwo]
// console.log(anotherArray)

// [
//   10, 20, 30, 40,
//   50, 60, 70, 80 
// ]

// let username = "deepak"
// let newusername = [...username]

// console.log(newusername)

// //Output
// [ 'd', 'e', 'e', 'p', 'a', 'k' ]


// let PersonInfo = {
//   username: 'deepak kumar',
//   email : 'deepak@gmail.com',
//   employeeId : 2345,
//   profession: 'Fullstack Developer'
//  }

// let displayResult = {...PersonInfo, Location: 'Odisha'}

// console.log(displayResult)

const playerNames = (playerOne, playerTwo, ...names) =>{
  console.log(`${playerOne} ${playerTwo} 
  ${names}
    `)

}
playerNames('Dhoni','Virat','Rohit','Klrahul')