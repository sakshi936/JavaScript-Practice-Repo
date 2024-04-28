
// Promise Creation

const promiseOne = new Promise((resolve,reject)=>{          
    //do an async task 
    setTimeout(function(){
        resolve();          // resolve is method     
        console.log("Async task is complete")
    },2000)
})


// Promise consumer

promiseOne.then(function(){
    console.log('promise consumed')
})


// Other way to create and call promise

new Promise((resolve, reject)=>{
    console.log('Asyn task 2');
    resolve();
}).then(()=>{
    console.log("Async 2 resolved");
})



const Promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username: 'chai', email: 'chai@gmail.com'}),1000    // resolved returned an object
    })
})

Promise3.then((user)=>{
    console.log(user);
})


// Promise chaining ...

const Promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true;
        if(!error){
            resolve({username: 'john', password: '123@123'})
        }
        else{
            reject('ERROR: Something went wrong!')
        }
    })
})


 Promise4.then((value)=>{        //then() method returns a Promise , so to handle a promise need an other .then() .catch() .finally()
    console.log(value);
    return (value.username);
}
, (error)=>{
    console.log(`Error in .then ${error}`)}

)
.then((name)=>{console.log(name);})   //or 
// .catch((err)=>{console.log(`Error in .catch ${err}`);})

.finally(()=>{
    console.log('finally Promise is handled');
})


// Handling Promise with async & await keyword  

const Promise5 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let error =true;
        if(!error){
            resolve({username: 'anie', password: 'abc@123'})
        }
        else{
            reject('ERROR: Something went wrong in Promise5!')
        }
    })
})
// .then((response)=>{
//     console.log(`1st-response`);
//     return '2nd-response';
// })
// .catch(e=>{console.log("error 1st"+e)
//         throw 'error 2';
//         })
//         .then((result)=>{console.log(result);})
//         .catch(err=>{console.log(err)})
//         .finally(()=>console.log("Finally Done!"))


async function HandlePromise(){    // it does not provide any option to handle promise rejection ------- 

   try{                                 // to resolve the rejection problem we can use try catch 
        const response = await Promise5
        console.log(response); 
    }
    catch(e){
        console.log(e);
    }
}

HandlePromise();



// fetch ----



async function Getallusers(){
    try{
        const respose= await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await(respose).json();
    console.log(data);
    console.log(respose);
    }
    catch(e){
        console.log("Error:"+e);
    }
}
Getallusers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((e)=>{
    console.log('eoor:'+e);
})

