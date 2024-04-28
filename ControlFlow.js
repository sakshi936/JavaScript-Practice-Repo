
// if 

if(true){
    // console.log("In scop");
}

// truthy and falsy values 

//falsy values-->  false,""- empty string, 0,-0,null,undefined,NaN..
//truthy values --> otherthan falsy values all sre truthy values but some truthy values are -- "0"," ",'false',{ },[],function(){}

// if(NaN){
//     console.log("Truthy value");
// }
// else
//     console.log("falsy value");


// way to use object and array as conditions


//empty object 

const obj ={};

// if(Object.keys(obj).length){  //chcek is there any keys present in object -- as keys(obj) gives keys[] chcek key.length( ) , 
//     console.log("truth value ");
// }

// if(obj){            //gives alway truth
//     console.log("not empty obj");
// }

// else
// console.log("empty obj");

//empty array 

const arr=[];

// if(arr.length){              //it gives false value 
//     console.log("not empty array ");
// }



// if(arr){                            //its gives truth value 
//     console.log("not empty array ");
// }
// else
//     console.log("empty array");



// if(false==0){
//     console.log("true");
// }

// if(false =='')
// console.log("true");


//-------------Nullish Coalescing Operator (??): null udefined  ----------------

let val1;
// val1= 5 ?? 10;

// val1= null ?? 10;
// val1= undefined ?? 15;
val1= null ?? 15 ?? 90;

// console.log(val1);


// --------------terniaty opeartor --------------

const a= (34<90)? true: false;

console.log(a);


