
// This key word  ---> this key word refers to current context
 

const user={
    username: "rocky",
    price: 999,

    welcomemsg: function(){
        console.log(`${this.username},  welcome to website `); // this key word refers to current context , about  which we talking about 
        console.log(this); // it refers current context;user
    }
}

// user.welcomemsg();
user.username="sam"
// user.welcomemsg();


// console.log(this );  // here it refers an empty object but in browser console this refers to Window object which 

function one(){
    console.log(this);  //this gives refrences of function onject
}

// one();  


// arrow function

const fun= ()=>{
    console.log(this); //gives empty object
}

// fun();

// Method one -- arrow fun

const addTwo =(num1,num2)=> { return num1+num2;} //explicit return 

console.log(addTwo(3,6));

// method second -- Implicit return

const addTwo2= (num1,num2)=>  num1+num2;   //implicit return // if { } are used then return keyword must be used, but in implicit return () can be written.

console.log(addTwo2(2,3));

const obj= (num1,num2)=>  ({sum: num1+num2});   //return object 

console.log(obj(2,9));


// IIFE : Immediate Invoked Function Expression 



// IIFE function 
(function chai(){
    console.log("DB-Connnected!");
})(); //here ; is needed when using more then one IIFE in a prgm 


//IIFE function expreesion
(()=> console.log("DB- Connnected too") )(); 

((name )=> console.log(`DB- Connnected ${name}`) )('sakshi')  //paramerized IIFE



