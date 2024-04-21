// Strings


let name ="Sakshi Pandey";

console.log(`here is  my Name: ${name} `);  //string interpolation


const getname= new String('get-Na-me');
console.log(getname);

console.log(getname.__proto__);

console.log(getname.length);        //length of string
console.log(getname.toUpperCase()); //get string in Uppercase
console.log(getname.charAt(4));     //get char at perticular index
console.log(getname.indexOf('t'));  //get index of perticular char

console.log(getname.substring(0,6));//get substring of string

console.log(getname.slice(-8,7));  // can use negative values 

const string= "    sakshi   pandey   "
console.log(string);
console.log(string.trim()); //trim al extra space around  string 
console.log(string.trimStart()); //trim al extra space from start
console.log(string.trimEnd()); //trim al extra space from start

console.log(string.replace('a','-')); // replace a single char with a specified char

console.log(string.includes('g')); // checks that specified string or char is present or not in string 

console.log(getname.split('-')); //split string into parts base on specified character

console.log(getname.concat(string)); //concatination of two or mare strings








// console.log(getname);
