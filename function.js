function add2num(num1,num2){
   console.log(num1+num2); 
//    return num1+num2
}

// const rt= add2num("2",5);
// console.log(rt);
// console.log(typeof rt);

// add2num(3,"9");

function Login(username="nothing"){   //default values --> (username="nothing")
    if(username!=undefined)
        return `${username} just logged in`;

    else
        console.log("Please enter a username!");

        return;
}

// console.log(Login("sakshi"));
// console.log(Login()); //undefined


function calculatePrice(...num1){ //here ... is rest operator // (val1,vl2,...num1)--> val1 = 200, val2= 300, ...num1 get all rest parameters   //A rest parameter must be last in a parameter list.
    return num1;
}

// console.log(calculatePrice(200,300,400,2000));

// passing object to function

const obj={
    username:"sakshi",
    price: 999
}

function handleObj(obj){
    console.log(`username is ${obj.username} and price is ${obj.price}`);
}

// handleObj(obj);
// handleObj({
//     username: "chhavi",
//     price: 599
// })

const arr =[1,2,'three','four',5,6];

function HandleArr(getarr){
    console.log(getarr);
}

HandleArr(arr)