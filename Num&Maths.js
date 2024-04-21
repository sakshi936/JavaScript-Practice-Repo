// A number literal like 37 in JavaScript code is a floating-point value, not an integer. 
// There is no separate integer type in common everyday use.


const score =123;
console.log(score);

// When Number is called as a constructor (with new), it creates a Number object, which is not a primitive. 
// For example, typeof new Number(42) === "object", and new Number(42) !== 42 (although new Number(42) == 42).

let num= new Number("1234");   //When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.
console.log( num);  // Number("1234") return no 1234.

console.log(num.toString().length);  //conver num to string & use strig propt fun to get lenght of string 
console.log(num.toFixed(1));  // fix numbers after decimal

console.log(Number("unicorn")); // NaN

console.log(Number(undefined)); //NaN

console.log('1'==true); //coercion
console.log(1==true); //coercion
console.log(0==true); //coercion
console.log(true==123); //coercion  true turns into 1; false turns into 0.

let num1 = 5.123456;
//A string representing a Number object in fixed-point or exponential notation rounded to precision significant digits. 

console.log(num1.toPrecision()); // '5.123456' console.log(num1.toPrecision(5)); // '5.1235'
console.log(num1.toPrecision(2)); // '5.1'
console.log(num1.toPrecision(1)); // '5'

num2 = 0.000123;

console.log(num2.toPrecision()); // '0.000123'
console.log(num2.toPrecision(5)); // '0.00012300'
console.log(num2.toPrecision(2)); // '0.00012'
console.log(num2.toPrecision(1)); // '0.0001'

console.log((1234.5).toPrecision(2)); // '1.2e+3'


const h=10000000;
console.log(h.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// Maths -->defult library  in js

console.log(Math);

console.log(Math.abs(-6));  //gives absolute value
console.log(Math.round(4.7)); //roundof value
console.log(Math.ceil(7.5));
console.log(Math.floor(5.4));
console.log(Math.min(4,1,-8,5));
console.log(Math.max(4,1,-8,5));


console.log(Math.random()); //values always  b/w 0-1 random values
console.log((Math.random()*10) +1); //  to get values min 1
console.log(Math.floor((Math.random()*10) +1)); //floore value only 

const min=10;
const max=20;

console.log(Math.floor(Math.random()* (max-min +1)) +min); //floor-> to get floore value, (max-min+1)-> to get value in givrn range , +min => so value will be at least min value (avoid 0) 
console.log(Math.round(455.34));