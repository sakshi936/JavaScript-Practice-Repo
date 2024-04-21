let no=23;      //number
let istrue= true;   //boolean
let un_defined; //undefined
let null_value= null;   //null
let string_v= "string";     //string
let bigint= BigInt(2134567898765432234455645678908765434567890098765434567787654323436768765432); //typeof- bigint

symbol => unique 
console.table([typeof(no),typeof(istrue),typeof(un_defined),typeof(null_value),typeof(string_v),typeof(bigint)]);


//Datatype Conversion

let score="33";
console.log(typeof(score));
 console.log(typeof Number(score));
 console.log(Number(score) );

 score="33abc";
 console.log(typeof Number(score));
 console.log(Number(score) );

 score= 5;
 console.log(typeof Boolean(score));
 console.log(Boolean(score) );

 score= -5;
 console.log(typeof Boolean(score));
 console.log(Boolean(score) );

 score= 0;
 console.log(typeof Boolean(score));
 console.log(Boolean(score) );

// 33=> 33, number
// 33abc=> NaN, number 

// 5=> true,Boolean
// -5=> true,Boolean
// 0=> false,Boolean

let s1='123';
let s2= 123;
console.log( 123 == '123'); // type coercion , that  one type force other to for conversion. to stop use (===) 

// String operations 

console.log(1+7+"7"); //=> 87
console.log("8"+2+3); //=> 823

console.log(+true);
// console.log(true+); //not allowed

comparison

console.log(2>11);  //=>false

console.log("2">1); // JS automaticlly  "2" convert in numbers 


console.log(null > 0);  //=>false
console.log(null == 0); //=>false
console.log(null >= 0); //=>true bcoz  equality check == & comparision >,<,>=,<= works differently in JS. comparison  convert null to a number , treating null as 0 thats why  null >= 0 is true & null >0 is false .


// === strict check

console.log("2"===2);  


const id= Symbol('123');
const anotherid= Symbol('123'); 

console.log("Symbol--------------");
console.log(id== anotherid);


const arr= [1,"satring",23.4];
console.log(arr);


let myobj= {
    name: "string",
    age: 21,
}

console.log(myobj);




// --------------------------------------Memory storage--------------------------------------------

//primitive datatype --> statck  memory  --> pass only copy of data 
// not primitive --> Heap -->  pass the actual data 


let idone=  1233;

let id2= idone; // idone value passes/assign to id2;

id2=234; //change the id2 value 
console.log(idone); // idone value will not change as idone is number (primitive datatype  it stored in stack ) [and data stored in  stack is not shared the meory location shared only copy of value ] 
console.log(id2); // id2 will change.


let user1={         //  an object (non-primitive data types )
    email: "user1@gmail.com",
    pass: "123@pass", 
}



let user2= user1; // user2 get memory refernce to user1. in HEAP

user2.email="User2@gamil.com";  //now user1's details will also change with user2's details 
user2.pass="pass@123";

console.log("User-1");
console.log(user1.email);
console.log(user1.pass);
console.log("User-2");
console.log(user2.email);
console.log(user2.pass);
