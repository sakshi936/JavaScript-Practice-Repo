//singleton -> object by constructor 
// Object.create;
//const obj= new Object();


//object literals---------------


const mySym= Symbol("key1"); 

const JSuser={
    name: "Sakshi", //keys: value
    "full name": "Sakshi Pandey",
    age: 10,
    location: "MP",
    email: "sakshi@gmail.com",
    isLoggedin: false,
    LastLoginDays: ["Monday", "Saturday"],
    [mySym]: "SymbolKey",   //[] refer symbol mySym
    // mySym: "NewSymKey"
};

// console.log(JSuser.name);
// console.log(JSuser["name"]); //other way to accses keys value of an object
// console.log(JSuser["full name"]); // only way accses string key: value
// console.log(typeof JSuser[mySym]); // syntax to get symbol key 
// console.log(typeof JSuser.mySym); 

JSuser.email= "Neweamil@gmail.com"; // change object key value 

// Object.freeze(JSuser);  // freeze to change Object any value
JSuser.email="sakshi@gmail.com";

// console.log(JSuser);  //before freeze chnages will reflect 



JSuser.greetings = function(){  //creating new (key&value:  function as key's value  )
    console.log("Hello JS User");
}
// console.log(JSuser.greetings); // return only reference of value  --> [Function (anonymous)]
// console.log(JSuser.greetings()); //invoke the fun in key greetings   --> Hello JS User

JSuser.greet_with_name= function(){
    console.log(`Hello JS User ${this["full name"]}`);
}
// console.log(JSuser.greet_with_name()); 

// console.log(JSuser);



// ---------------singleton object----------------

const obj = new Object();

// console.log(obj);  //empty object

obj.id = "123"
obj.name= "sakshi"
obj.no="567845678345";

// console.log(obj);  // object with key & values 

const newUser ={   //nested oject

    email: "some@gmail.com",
    fullName: {
        F_Name: "Sakshi",
        L_Name: "Pandey"
    }
}
// console.log(newUser);
// console.log(newUser.email);
// console.log(newUser.fullName);
// console.log(newUser.fullName.F_Name);
// console.log(newUser.fullName.L_Name);


// Concatinate two objects 


const  obj1 ={ 1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e"}


//opt-1

// const obj3= {obj1,obj2}; // assign objects in obj3
// console.log(obj3);


//opt-2
 // assigns only object value(Key: Value) not whole obj  //The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

//  const obj3 = Object.assign({}, obj1,obj2);  // { }-> source -> obj1 , obj2,... -> target 
//  console.log(obj3);

//opt-3

const obj3= {...obj1, ...obj2} // spread obj1 , spread obj2 and assign them to obj3
// console.log(obj3);


// Array of obj

const objArr= [
    {
        fname: "kuchh bhi 1",
        lame: "something 1",
        dob: "02/03/29 1"
    },
    {
        fname: "kuchh bhi 2",
        lame: "something 2",
        dob: "02/03/29 2"
    },
    {
        fname: "kuchh bhi 3",
        lame: "something 3",
        dob: "02/03/29 3"
    }

   
]

// console.log(objArr);
// console.log(objArr[0].fname);  
// console.log(objArr[1].fname);
// console.log(objArr[2].fname);  //or we can use loop on array 

// console.log(JSuser);

const objKeys= Object.keys(JSuser);   //all keys of JSuser in array form 
// console.log(objKeys);
// console.log(objKeys[0]);

const objevalues= Object.values(JSuser);   //all vlues of JSuser in array form 
// console.log(objevalues);

// console.log(Object.entries(JSuser)); //Returns an array of key/values of the enumerable properties of an object

console.log(JSuser.hasOwnProperty('isLoggedin'));  //Determines whether an object has a property with the specified name.  return in boolean

