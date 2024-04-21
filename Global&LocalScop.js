
let a=300; //global 

if(true){

    // console.log(a);
    
    let a =90; //local scop within if black 

    console.log(a);
}

console.log(a);


if(true){
    const username ="sakshi";

    if(username=== "sakshi"){
        const website =" youtube"
        console.log(username+website);  // here username work as global variable for 2nd if block 
    }
}


console.log(fun2(9));  //fun calling before funcion declaratoin


function fun2(num){
    return num+2;
}



// console.log(addone(7));  //not posible in this mehtod of fun declaration
const addone = function fun1(num){  //funtion withing function

    return num+1;

}

// console.log(addone(7));  //functon calling after declaration , functon calling before declaration is not posible in this method as function is stored in a variable & withour declaraing a varible we can't use it 
