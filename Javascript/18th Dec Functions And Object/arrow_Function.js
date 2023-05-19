const happybirthday = () =>{
  console.log('happybirthday')
}

happybirthday()

const findLength = (items) =>{
  for(let i of items){
    console.log('The length of:', i,":" ,i.length)
  }
}

findLength(['deepak','rahul','alygoni'])


//using arguments in arrow function

let magicNumbers = (elements) => console.log(elements)
magicNumbers([10,20,30,40])