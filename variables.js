// Variable...............

"use strict"; //treat all js code as newer version of js.

const accId=1234;
let email="email@gamil.com";
var accPass="123ABC";
accState=" UP";

console.log(" accId-> "+accId+" email-> "+email+"  accPass-> "+accPass+" accState-> "+accState);

//  accId=12345;  //cont can't be updated 
 email="email2@gamil.com";
 accPass="123xyz";
accState=" MP";

console.log(" accId-> "+accId+" email-> "+email+"  accPass-> "+accPass+" accState-> "+accState);
console.table([accId,email,accPass,accState]);
