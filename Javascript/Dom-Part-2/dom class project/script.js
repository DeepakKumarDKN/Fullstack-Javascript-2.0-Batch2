// let button = document.querySelector('button')
// console.log(button)
// button.addEventListener('click', function effectchange(){
//   document.body.style.background = "red"
// })


//TODO:
// we can also do the same thing with help of id and class let say for an example the id is "btn"
// which i have specefied in the index.html file

// TODO: Note: in the below example i am targetting the btn using getElementById
// thats why there is no neeed of specifying whether we are targetting a class or id
// in query selector we have to specify.


// let btn = document.getElementById('btn')
// console.log(btn)
// btn.addEventListener('click', function backgoundChange(){
//   document.body.style.background = "blue"
// })

//TODO:
// Performing the same thing with the help of class by using queryselector
//TODO: Note: In query selector we have to specify whether we are using class or id 
// if it is a id then we have to use (#btn-btn)
// if it is a class we have to use (.btn_btn)

// let btn_btn = document.querySelector('.btn-btn')
// console.log(btn_btn)
// btn_btn.addEventListener('click', function backgoundColorChange(){
//   document.body.style.background = "#EDC126"
// })


let btn_btn = document.querySelector('.btn-btn')
const colorChange = () =>{
  let val = '0123456789ABCDEF'
  let cons = "#"

  for(let i=0; i<6; i++){
    cons = cons+val[Math.floor(Math.random()*16)]
  }
  return cons;
}

console.log(colorChange())

btn_btn.addEventListener('click', function backGroundColorChange(){
  document.body.style.background = colorChange()
})

