//TODO: Node js

/*
  node js is a runtime which allow us to write our javascript code
  so first of all javascript was intitially made to run in the browser but 
  
  RAYAN DHAL Litereaaly toook everything from the browser (everything mean everything that was 
    available for javascript) he just took everything and created 
  Nodejs runtime which is an exact environment for javascript)

  TODO: Cretator of nodejs is Rayan Dhal

  so now node.js also can do everything which is being previously done by the browser now all those things can be done by nodejs and here we dont need any borowser for that because it is being designed in sucgh a way that where browser is not required and still we can perform all operations.
*/

/* 
    Javascript Engine (v8) =>   libuv (c++)

    so Libuv was written with c++ the developer mixed Libuv with Javascript and created the engine called => V8 for chrome
*/

/* 
  TODO: let and const and temporal dead zone

  let and const declaration are hoisted 
  var declarations are also hoisted so all three of them are hoisted
  but the way of hoisting is very diffrent from each other lets get into an example:-
  
  let username = "deepak"
  var surname = "nayak"

  so we can  access var surname even before initialization i mean.. 

  console.log(surname)  => we are accessing it even before initialization and yes we can access it because javascript allows us to do it and the memory is being allocated to it even before single line is executed.

  and we will not get any error infact we will get a special placeholder called undefined.

  but we cannot access username here because it is being declared using let and let doesnot allow us to do it, var allows us but lt doesn't allow us.

  in case of let we will get an error as Reference Error Cannot access 'username' before initialization so its pretty clear we can only access 'username' after we have assigned any value to it.

  console.log(surname) 
  let username = "deepak";
  var surname = "nayak"


  accessing it after putting some value into it or initializing any value to it for example =>

  let username = "deepak"
  console.log(username)  => now we can access it ..
  var surname = "nayak"

*/

/* 
  TODO: Image One explanation 

  let username = "deepak"
  console.log(username)
  var address = "Kolkotta"

  just look at image One we can see that both username and address both are hoisted but address is attatched into global and username is inside the Script that mean they are stored inside diffrent memory space they are not inside the global now and we cannot access it before putting some value into it/ before initializinf some value into it.:

  Script:
    username : undefined
  
  Global:
    address: undefined

  
  Again look at the image when the control will come into line number 3. Inside the Script the username is being assigned with 'deepak' so now we can access it ... because now username is pointing out to 'deeepak' or the value 'deepak is being stored inside username


  so now when the line number 3 will execute we can check on the console that "deepak: is being printed there

  till now address will be undefined but when i will execute the line number 4 at that time address will point out towards "Kolkotta"

  TODO: Temporal Dead Zone

  so the timetaken till the variable was hoisted and till it was initialized a value into it. that paricular time between un initialization to initialize a value into it is known as Temporal Dead Zone.

  console.log(username)
  let username = "deepak" 

  var surname = "kumar"

  during the temporial Dead Zone Phase we cannot access the value of username we can only access it after the temporial Dead Zone Ends.

*/

/*
    Accessing 
    ---------
    let username = "deepak"
    var address = "kolkotta"

    we can access address using window.address as it is defined in the global scope
*/

/*
    Redeclaration of let and var
    ----------------------------
    let username = "deepak"
    let username = "rahul" => this is not allowed as it results to syntax error
    console.log(username)

    var  username = "deepak"
    var username = "rahul"  => this is allowed
    console.log(username)


    const username = "deepak"
    const username = "deepak"
    console.log(username)

    const is very strict as compared to the let because if we are declaring something with let then we can leave it by not initializing a value.

    let username; => we can write like this let will allow us to do that


    
    but if we are declaring with const then it is mandatory that we have to provide some value to it.

    const username;
    console.log(username)
    SyntaxError: Missing initializer in const declaration

*/


