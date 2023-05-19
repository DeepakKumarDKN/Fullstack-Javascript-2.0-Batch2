// the for of loop is designed for the array only

let arrayOne = ['one','two','three','four','five','six','seven','eight']
let arrayCap = []

for(let element of arrayOne){
  arrayCap.push(element.toUpperCase())
}

console.log(arrayCap)