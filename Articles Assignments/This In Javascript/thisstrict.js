
// function display(){
//   console.log(this)
// }
// display()

"use strict" 

const PersonDetails = {
  username : 'deepak',
  email : 'deepaknayak@gmail.com',
  displayDetails : function(){
    console.log(this)
  }
}

PersonDetails.displayDetails()