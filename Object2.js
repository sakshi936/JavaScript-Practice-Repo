// Destructuring 

const course ={
    couresname: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);  //instead of this 

const {courseInstructor: instructor} =course;  // use obj destructure 

console.log(instructor);



// JSON 

// {
//     "name": "SomeName",
//     "coursename": "JS in hindi ",
//     "price" : 999
// }

// or 

// [
//     {
//         "name": "SomeName",
//         "coursename": "JS in hindi ",
//         "price" : 999
//     },
//     {
//         "name": "SomeName",
//         "coursename": "JS in hindi ",
//         "price" : 999
//     } 
// ]