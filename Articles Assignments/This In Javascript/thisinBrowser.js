// this in global scope
console.log(this)


//----------------------------------------------------------------
// this in an regular function pointing out towards global object

function bioData(){
  console.log(this)
}

bioData()
//--------------------------------------------------------------
// this in object here this is pointing out towards the object


const display = {
  userName: 'Deepak Kumar Nayak',
  email: 'deepak@gmail.com',

  displayDetails : function(){
    console.log(`
    ${this.userName} 
    ${this.email}`)
  }

}

display.displayDetails()

//-----------------------------------------
//this inside an inner function 

const personDetails = {
  firstname: "deepak",
  username: 'deepak_kumar',
  email : 'deepak@gmail.com',
  displayfullinfo : function(){
    function funcInner(){
      console.log(this)
    }
    funcInner()
  }

}

personDetails.displayfullinfo()