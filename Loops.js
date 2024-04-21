
// *********** here - no index out of bound error in js  ***************

// for loop    


// table

// for (let index=1; index<=10; index++) {
    
//     console.log("--------------------Table of "+ index+"---------------------");
//     for(let j=1;j<=10;j++){
//        console.log(index + " * " + j+ " = " +index*j ); 
//     }

    
// }



// Array element access by loop 

const arr = [2, 4, 6 ,8, 10 ,12, 14, 16, 18, 20];

// for(let i=0;i< arr.length;i++){

//     console.log((i+1)+ `th element - ` + arr[i]);
// }


// ---------------------while loop ----------------------------


  let i=1;

//     while( i<= 10){
//     console.log("--------------------Table of "+ i+"---------------------");
//     let j=1;
//     while(j<=10){
//        console.log(i + " * " + j+ " = " +i*j ); 
//        j++;
//     }

//     i++;
// }


// Array ---

i=0;
// while(i<arr.length){

//     console.log((i+1)+ `th element - ` + arr[i]);
//     i++;
// }

//-------------------------------------------------------------------------------------------------
//--------------------------------------- do-while --------------------------------------------
let a=0; 
// let a=11;

// do{
//     console.log(`Number is ${a}`);
//     a++;
// }while(a<=10)


// -------------------------------------------------------------------------------------------------------

// ------------------------for-of loop---------------------------

const fruits= ['apple', 'banana', 'grapes', 'orange', 'mango']

// for (const fruit of fruits) {
//     // if(fruit== 'banana')
//     //     continue;


//     console.log(fruit);
// }


// ----------------Map-----------------------  //duplicates keys are not allowed 

const map1= new Map();

map1.set('IN','India')
map1.set('USA','United state of India')
map1.set('Fr' ,'France')
map1.set('IN','India')


// console.log(map1);
// map1.set('En','india')
// map1.set('IN','England')

// console.log(map1);

// Maps itertion by for of  ---

// for (const key of map1) {  // it gives arrays of map keys and values 
//     console.log(key);
// }


// for(const [key, value] of map1){

//     console.log(key, ' :- ', value);
// }



// -------Object iteration ---------

const myobj = {
    js: 'JavaScript',
    cpp: 'C++',
    ru: 'Ruby',
    swift: 'Swift by apple'
}

// for(const [key, value] of myobj){   //myobj is not iterable by for of 

//         console.log(key, ' :- ', value);
//     }


// ---------------------------------------------------------------------------------------------------

// ---------------For-in loop--------------------  // it gives the only of object/arr's  keys 

//for in on object--------

// for (const key in myobj) {
  
//     // console.log(myobj [key]);
//     console.log(`${key}: ${myobj[key]}`);
// }

// for in on array----------------

const prgm_lang= ['c', 'cpp', 'java', 'pyhton', 'Javascript']

for (const key in prgm_lang) {
    // console.log(key);
}


// for in on map----------------------

// for (const key in map1) {   // map is not iterable by for-in loop
//     console.log(key);
// }



// ---------------------------------------------------------------------------------------------------------


// -------------------------for-each------------------------------------------



// prgm_lang.forEach( function(item){ console.log(item) })

// prgm_lang.forEach( item => console.log(item))


function print(val){
    console.log(val);
  }
  
  
  // prgm_lang.forEach( print)
  
  // prgm_lang.forEach((val, inedx, arr)=> console.log(`${val} ->  ${inedx} -> ${arr}`))   // foreach parameters-> values/element of arr , index of element in arr, whole arr







