
//------------------------------------Arrays---------------------------------

const arr= [1,3,"name",true];
// console.log(arr);

const arr1= new Array(1,2,3,4,5);
// console.log(arr1);


//Array Methods 


// arr1.push(6);
// arr1.push(7);  //add new ele at last in arr
// console.log(arr1);
// arr1.pop();     //delete ele at last in arr
// console.log(arr1);

// arr1.unshift(8);  //add ele at first index in arr by shifting all ele  
// console.log(arr1);
// arr1.shift();   // delete ele at front in arr 
// console.log(arr1); 

// console.log(arr1.includes(14));  //gives Ans , is 7 is include in arr or not , --> return true/false 
// console.log(arr1.indexOf(9));       //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// const newarr= arr1.join(); //combine the arr elements into string (array ele separator will also include in string)
// console.log(newarr +"\ntypeof newarr-> "+ typeof newarr);

// console.log("Array-> "+ arr1);

// const arr2= arr1.splice(1,3);  //splice()---> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(arr2);
// console.log("Arrays after splice "+ arr1);

// const  arr22= arr1.splice(1,3, "hello");
//  console.log(arr22);
//  console.log("Arrays after splice "+ arr1);

// const arr3= arr1.slice(1,4);  // slice()--> Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// console.log("slice() "+arr3);
// console.log("Arrays after slice "+ arr1);


const array= ["one", "two", 3];
const array2= ["four",5,"six"];

const new_array= array.concat(array2); //concatinate 
console.log(new_array);

const n_arr= [...array,...array2];  //spread operator
console.log(n_arr);


const arr_in_arr = [1,2,3,[4,5],[6,[7,8,9],10]];

const flat_arr= arr_in_arr.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(flat_arr);

console.log(Array.isArray("ISARRAY"));
console.log(Array.from("ISARRAY")); //convert single vlaue into array
console.log(Array.from({name: "name"})); //return empty array as it's not defined to which key or value convert into array
console.log(Array.of("sakshi",2,27));   // make array of given values 



